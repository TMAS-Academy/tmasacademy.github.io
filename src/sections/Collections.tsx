import { Link } from 'react-router-dom';
import { books, categories } from '../data/books';

export default function Collections() {
  return (
    <section className="section section-raised" aria-labelledby="collections-title">
      <div className="container">
        <h2 id="collections-title">Three collections, one library</h2>
        <div className="collections">
          {categories.map((category) => {
            const count = books.filter((b) => b.category === category.id).length;
            return (
              <article key={category.id} className={`collection ${category.accentClass}`}>
                <div>
                  <h3>{category.label}</h3>
                  <p className="collection-count">{count} books</p>
                </div>
                <div>
                  <p>{category.description}</p>
                  <ul className="tag-list" aria-label={`${category.label} subjects`}>
                    {category.subjects.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <Link to={`/books?category=${category.id}`} className="text-link">
                    Browse {category.label}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
