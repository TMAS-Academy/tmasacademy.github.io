'use client';

import Link from 'next/link';
import { books } from '@/data/books';
import { getPdfUrl } from '@/lib/pdf-storage';
import { BookOpen } from 'lucide-react';
import dynamic from 'next/dynamic';

const PdfCover = dynamic(() => import('@/components/features/books/PdfCover'), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '80px',
      height: '104px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <BookOpen style={{ width: '24px', height: '24px', color: 'var(--text-secondary)' }} />
    </div>
  )
});

const warmColors = [
  { border: '#ef4444', hover: '#dc2626', bg: 'rgba(239, 68, 68, 0.03)', shadow: 'rgba(239, 68, 68, 0.15)', icon: '#ef4444' },
  { border: '#f97316', hover: '#ea580c', bg: 'rgba(249, 115, 22, 0.03)', shadow: 'rgba(249, 115, 22, 0.15)', icon: '#f97316' },
  { border: '#f59e0b', hover: '#d97706', bg: 'rgba(245, 158, 11, 0.03)', shadow: 'rgba(245, 158, 11, 0.15)', icon: '#f59e0b' },
  { border: '#eab308', hover: '#ca8a04', bg: 'rgba(234, 179, 8, 0.03)', shadow: 'rgba(234, 179, 8, 0.15)', icon: '#eab308' },
];

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="pb-4 mb-6 border-b border-glass-border">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Browse Books
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '16px' }}>
            Select a book to start reading
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {books.map((book, index) => {
            const colors = warmColors[index % warmColors.length];
            const pdfUrl = getPdfUrl(book.pdfFile);
            const hasPdf = !!pdfUrl;

            return (
              <Link
                key={book.id}
                href={`/books/${book.id}`}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '16px',
                    padding: '20px',
                    borderRadius: '8px',
                    border: '1px solid var(--glass-border)',
                    borderTop: `2px solid ${colors.border}`,
                    backgroundColor: 'var(--bg-secondary)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderTopColor = colors.hover;
                    e.currentTarget.style.backgroundColor = colors.bg;
                    e.currentTarget.style.boxShadow = `0 8px 30px ${colors.shadow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderTopColor = colors.border;
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ flexShrink: 0, display: 'flex', alignItems: 'flex-start' }}>
                    {hasPdf ? (
                      <div style={{
                        borderRadius: '4px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <PdfCover pdfUrl={pdfUrl!} width={80} height={104} />
                      </div>
                    ) : (
                      <div style={{
                        width: '80px',
                        height: '104px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <BookOpen style={{ width: '32px', height: '32px', color: 'var(--text-secondary)' }} />
                      </div>
                    )}
                  </div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: 'var(--text-primary)',
                    }}>
                      {book.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                      by {book.authors ? book.authors.join(', ') : book.author}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
