import { notFound } from 'next/navigation';
import { getBookById } from '@/data/books';
import BookViewer from './BookViewer';

export default async function BookViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBookById(slug);

  if (!book) {
    notFound();
  }

  return <BookViewer book={book} />;
}
