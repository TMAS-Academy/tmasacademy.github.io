/**
 * Upload all PDFs from public/pdfs/ to Supabase Storage.
 *
 * Prerequisites:
 * 1. Create a public bucket named "pdfs" in Supabase Dashboard → Storage
 * 2. Set env vars (or pass inline):
 *    NEXT_PUBLIC_SUPABASE_URL
 *    SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage (from client/):
 *   node scripts/upload-pdfs.mjs
 */

import { createClient } from '@supabase/supabase-js';
import { existsSync, readFileSync } from 'fs';
import { readdir, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

/** Load .env.local / .env (Node does not load these for plain scripts). */
function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return;
  for (const line of readFileSync(filePath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvFile(join(ROOT, '.env.local'));
loadEnvFile(join(ROOT, '.env'));

const PDF_DIR = join(ROOT, 'public', 'pdfs');
const BUCKET = process.env.NEXT_PUBLIC_SUPABASE_PDF_BUCKET || 'pdfs';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const serviceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error(
    'Missing Supabase credentials in client/.env.local:\n' +
      '  NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co\n' +
      '  SUPABASE_SERVICE_ROLE_KEY=eyJ...  (service_role from Dashboard → API)\n'
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey);

async function main() {
  const files = (await readdir(PDF_DIR)).filter((f) => f.endsWith('.pdf'));
  if (files.length === 0) {
    console.error(`No PDFs found in ${PDF_DIR}`);
    process.exit(1);
  }

  console.log(`Uploading ${files.length} PDF(s) to bucket "${BUCKET}"...\n`);

  for (const file of files) {
    const path = join(PDF_DIR, file);
    const body = await readFile(path);
    const { error } = await supabase.storage.from(BUCKET).upload(file, body, {
      contentType: 'application/pdf',
      upsert: true,
    });

    if (error) {
      console.error(`✗ ${file}: ${error.message}`);
    } else {
      const url = `${supabaseUrl}/storage/v1/object/public/${BUCKET}/${file}`;
      console.log(`✓ ${file}`);
      console.log(`  ${url}\n`);
    }
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
