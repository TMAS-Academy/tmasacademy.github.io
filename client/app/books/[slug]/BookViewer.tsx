'use client';

import Link from 'next/link';
import { Book } from '@/data/books';
import { getPdfUrl } from '@/lib/pdf-storage';
import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';

interface BookViewerProps {
  book: Book;
}

export default function BookViewer({ book }: BookViewerProps) {
  const pdfUrl = getPdfUrl(book.pdfFile);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm pb-4 mb-4 border-b border-glass-border">
          <Link
            href="/books"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '14px',
              marginBottom: '12px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-yellow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            Back to Books
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {book.title}
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              marginTop: '4px',
              fontSize: '14px',
            }}
          >
            by {book.authors ? book.authors.join(', ') : book.author}
          </p>
        </div>

        {pdfUrl ? (
          <div className="w-full">
            <p style={{ marginBottom: '12px' }}>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--accent-yellow)',
                  fontSize: '14px',
                }}
              >
                Open PDF in new tab
                <ExternalLink style={{ width: '14px', height: '14px' }} />
              </a>
            </p>
            <iframe
              src={pdfUrl}
              className="w-full h-[60vh] md:h-[700px] border border-glass-border rounded-lg shadow-lg"
              title={book.title}
            />
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px 20px',
              textAlign: 'center',
              border: '1px solid var(--glass-border)',
              borderRadius: '12px',
              backgroundColor: 'var(--bg-secondary)',
            }}
          >
            <BookOpen
              style={{
                width: '64px',
                height: '64px',
                color: 'var(--accent-yellow)',
                marginBottom: '24px',
              }}
            />
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '12px',
              }}
            >
              Coming Soon
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                maxWidth: '480px',
              }}
            >
              This book is currently being prepared. Check back soon for the full study guide.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

