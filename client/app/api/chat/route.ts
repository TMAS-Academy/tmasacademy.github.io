import { NextRequest } from 'next/server';

// OpenRouter chat completions endpoint (OpenAI-compatible)
const OPENROUTER_ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions';

// The model is fully configurable via the OPENROUTER_MODEL env var.
// Set it to any OpenRouter model slug, e.g.:
//   openai/gpt-4o-mini, anthropic/claude-3.5-sonnet, google/gemini-2.0-flash-001,
//   meta-llama/llama-3.3-70b-instruct, deepseek/deepseek-chat, etc.
// Browse all models at https://openrouter.ai/models
const DEFAULT_MODEL = 'openai/gpt-4o-mini';

// System prompt defining the assistant persona. Can be overridden with OPENROUTER_SYSTEM_PROMPT.
const DEFAULT_SYSTEM_PROMPT = `You are TMAS AI, an educational assistant for The Math and Science Academy. If asked about your origin or what AI you are, say you are "TMAS AI, the educational assistant for The Math and Science Academy."

You ONLY respond to educational questions about math, science, AP courses, study tips, homework help, and academic subjects. If someone asks you about non-educational topics (like sports, food, entertainment, weather, shopping, etc.), politely decline and say: "I'm sorry, I can only help with educational questions about math, science, and academic subjects. Please ask me something related to your studies!"`;

interface ConversationMessage {
  role: string;
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, conversationHistory } = body as {
      message?: string;
      conversationHistory?: ConversationMessage[];
    };

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'OPENROUTER_API_KEY environment variable is not set' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const model = process.env.OPENROUTER_MODEL || DEFAULT_MODEL;
    const systemPrompt = process.env.OPENROUTER_SYSTEM_PROMPT || DEFAULT_SYSTEM_PROMPT;

    // Build the OpenAI-compatible messages array that OpenRouter expects.
    const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
      { role: 'system', content: systemPrompt },
    ];

    if (Array.isArray(conversationHistory)) {
      for (const msg of conversationHistory) {
        if (!msg || typeof msg.content !== 'string') continue;
        const role = msg.role?.toLowerCase() === 'assistant' ? 'assistant' : 'user';
        messages.push({ role, content: msg.content });
      }
    }

    messages.push({ role: 'user', content: message });

    // Optional attribution headers (used by OpenRouter for app rankings/analytics).
    const headers: Record<string, string> = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };
    if (process.env.OPENROUTER_SITE_URL) {
      headers['HTTP-Referer'] = process.env.OPENROUTER_SITE_URL;
    }
    if (process.env.OPENROUTER_SITE_NAME) {
      headers['X-Title'] = process.env.OPENROUTER_SITE_NAME;
    }

    const upstream = await fetch(OPENROUTER_ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model,
        messages,
        stream: true,
      }),
    });

    if (!upstream.ok || !upstream.body) {
      const errorText = await upstream.text().catch(() => '');
      console.error('OpenRouter API error:', upstream.status, errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to get response from AI', details: errorText }),
        {
          status: upstream.status || 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const reader = upstream.body.getReader();
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    // Re-emit the response as newline-delimited JSON ({ content, done }) so the
    // existing frontend streaming parser keeps working unchanged. `content` is
    // the full accumulated text on each update.
    const stream = new ReadableStream({
      async start(controller) {
        let buffer = '';
        let accumulatedContent = '';

        const flushDone = () => {
          controller.enqueue(
            encoder.encode(JSON.stringify({ content: accumulatedContent, done: true }) + '\n')
          );
        };

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });

            // OpenRouter streams Server-Sent Events: lines separated by "\n",
            // data lines prefixed with "data: ", comments prefixed with ":".
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const rawLine of lines) {
              const line = rawLine.trim();
              if (!line || line.startsWith(':')) continue;
              if (!line.startsWith('data:')) continue;

              const data = line.slice(5).trim();
              if (data === '[DONE]') {
                flushDone();
                controller.close();
                return;
              }

              try {
                const parsed = JSON.parse(data);
                const delta: string | undefined = parsed?.choices?.[0]?.delta?.content;
                if (delta) {
                  accumulatedContent += delta;
                  controller.enqueue(
                    encoder.encode(
                      JSON.stringify({ content: accumulatedContent, done: false }) + '\n'
                    )
                  );
                }
              } catch {
                // Partial/non-JSON keep-alive payload; ignore.
              }
            }
          }

          flushDone();
          controller.close();
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
