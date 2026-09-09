import { NextResponse } from 'next/server';

// The chatbot now talks to OpenRouter, which is authenticated server-side via the
// OPENROUTER_API_KEY env var. No per-user (AWS Cognito) login is required anymore,
// so this endpoint simply unlocks the chat UI with a lightweight session token.
export async function POST(): Promise<Response> {
  return NextResponse.json({
    success: true,
    token: `tmas-${Date.now()}`,
  });
}
