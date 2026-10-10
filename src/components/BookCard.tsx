import { Link } from 'react-router-dom';
import { getCategory, isAvailable, type Book } from '../data/books';

export default function BookCard({ book }: { book: Book }) {
  const category = getCategory(book.category);
  const available = isAvailable(book);

  return (
    <article className={`book-card ${category.accentClass}`}>
      <p className="book-card-category">{category.label}</p>
      <h3>
        <Link to={`/books/${book.id}`} className="book-card-link">
          {book.title}
        </Link>
      </h3>
      <p className="book-card-summary">{book.summary}</p>
      <p className="book-card-meta">
        <span>{book.level}</span>
        <span className={`status${available ? ' status-ready' : ''}`}>
          {available ? 'Free download' : 'Coming soon'}
        </span>
      </p>
    </article>
  );
}
