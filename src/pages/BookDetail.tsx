import { Link, useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { books, getBook, getCategory, isAvailable } from '../data/books';
import { usePageTitle } from '../hooks/usePageTitle';
import NotFound from './NotFound';

export default function BookDetail() {
  const { bookId = '' } = useParams();
  const book = getBook(bookId);
  usePageTitle(book?.title);

  if (!book) return <NotFound message="We couldn’t find that book." />;

  const category = getCategory(book.category);
  const available = isAvailable(book);
  const related = books
    .filter((b) => b.id !== book.id && (b.category === book.category))
    .slice(0, 3);

  return (
    <>
      <div className={`book-hero ${category.accentClass}`}>
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link to="/books">Books</Link>
            <span aria-hidden="true">/</span>
            <Link to={`/books?category=${category.id}`}>{category.label}</Link>
          </nav>
          <h1>{book.title}</h1>
          <p className="lede">{book.summary}</p>
          <dl className="facts">
            <div>
              <dt>Collection</dt>
              <dd>{category.label}</dd>
            </div>
            <div>
              <dt>Subject</dt>
              <dd>{book.subject}</dd>
            </div>
            <div>
              <dt>Level</dt>
              <dd>{book.level}</dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>Free</dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="section section-tight" aria-label="About this book">
        <div className={`container book-body ${category.accentClass}`}>
          <div>
            <h2>About this book</h2>
            <p>{book.description}</p>

            <h2>What’s inside</h2>
            <ul className="topic-list">
              {book.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <aside className="download-panel" aria-label="Get this book">
            <h2>Get the book</h2>
            {available ? (
              <>
                <p>Free to download, read, and share.</p>
                <a className="btn btn-primary" href={book.downloadUrl} target="_blank" rel="noreferrer">
                  Download {book.title}
                </a>
              </>
            ) : (
              <>
                <p>This book is still being written and reviewed. Want to help finish it?</p>
                <Link className="btn btn-ghost" to="/contact?topic=contribute">
                  Get involved
                </Link>
              </>
            )}
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-raised" aria-labelledby="related-title">
          <div className="container">
            <h2 id="related-title">More in {category.label}</h2>
            <div className="book-grid">
              {related.map((b) => (
                <BookCard key={b.id} book={b} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
