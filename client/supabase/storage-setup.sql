-- Paste this entire file into Supabase Dashboard → SQL Editor → Run
-- (Do NOT type the file path — copy the SQL below)

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'pdfs',
  'pdfs',
  true,
  104857600,
  array['application/pdf']
)
on conflict (id) do update set
  public = true,
  file_size_limit = 104857600,
  allowed_mime_types = array['application/pdf'];

drop policy if exists "Public read access for PDFs" on storage.objects;
create policy "Public read access for PDFs"
on storage.objects for select
to public
using (bucket_id = 'pdfs');
