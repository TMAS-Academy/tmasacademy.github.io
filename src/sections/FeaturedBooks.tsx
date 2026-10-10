import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { featuredBookIds, getBook, type Book } from '../data/books';

export default function FeaturedBooks() {
  const featured = featuredBookIds.map(getBook).filter((b): b is Book => Boolean(b));

  return (
    <section className="section" aria-labelledby="featured-title">
      <div className="container">
        <div className="section-head">
          <h2 id="featured-title">Start with one of these</h2>
          <Link to="/books" className="text-link">
            See all books
          </Link>
        </div>
        <div className="book-grid">
          {featured.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
