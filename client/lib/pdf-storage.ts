const PDF_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_PDF_BUCKET || 'pdfs';

/**
 * Supabase project URL.
 * Reads from env vars first, falls back to the known project URL so that
 * PDFs work on Cloudflare even when the env var isn't configured on the Worker.
 */
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL ||
  'https://vmqgbroxjkmhhibuhfch.supabase.co';

/** Normalize a book pdf field to a storage object name (e.g. ACE_AP_Biology.pdf). */
export function pdfFileName(pdfFile: string): string {
  return pdfFile.replace(/^\/pdfs\//, '').replace(/^\//, '');
}

export function isPdfStorageConfigured(): boolean {
  return true;
}

/**
 * Public URL for a PDF in Supabase Storage.
 * Falls back to /pdfs/... for local dev when no Supabase URL is available.
 */
export function getPdfUrl(pdfFile: string | undefined): string | undefined {
  if (!pdfFile) return undefined;

  const fileName = pdfFileName(pdfFile);
  const encoded = fileName.split('/').map(encodeURIComponent).join('/');
  return `${SUPABASE_URL}/storage/v1/object/public/${PDF_BUCKET}/${encoded}`;
}

export function getPdfBucket(): string {
  return PDF_BUCKET;
}
