import { NextRequest, NextResponse } from 'next/server';
import { getPdfUrl } from '@/lib/pdf-storage';

/** Resolve a PDF URL at request time (works when Supabase vars are set on the Worker). */
export async function GET(request: NextRequest) {
  const file = request.nextUrl.searchParams.get('file');
  if (!file) {
    return NextResponse.json({ error: 'file is required' }, { status: 400 });
  }

  const url = getPdfUrl(file);
  if (!url || url.startsWith('/')) {
    return NextResponse.json(
      { error: 'PDF storage is not configured', url: null },
      { status: 503 }
    );
  }

  const check = await fetch(url, { method: 'HEAD' });
  if (!check.ok) {
    return NextResponse.json(
      {
        error: `PDF "${file}" is not in Supabase storage yet. Run npm run upload-pdfs after adding the file.`,
        url: null,
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ url });
}
