import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookCard from '../components/BookCard';
import PageHeader from '../components/PageHeader';
import { books, categories, levels, type CategoryId, type Level } from '../data/books';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Books() {
  usePageTitle('Books');
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const categoryParam = params.get('category');
  const levelParam = params.get('level');
  const category = categories.some((c) => c.id === categoryParam)
    ? (categoryParam as CategoryId)
    : 'all';
  const level = levels.includes(levelParam as Level) ? (levelParam as Level) : 'all';

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value === 'all') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter((b) => {
      if (category !== 'all' && b.category !== category) return false;
      if (level !== 'all' && b.level !== level) return false;
      if (!q) return true;
      return [b.title, b.subject, b.summary, ...b.topics].join(' ').toLowerCase().includes(q);
    });
  }, [category, level, query]);

  const reset = () => {
    setQuery('');
    setParams({}, { replace: true });
  };

  return (
    <>
      <PageHeader title="Books">
        The complete TMAS Academy library. Every book is free, organized by collection and subject.
      </PageHeader>

      <section className="section section-tight" aria-label="Book library">
        <div className="container">
          <div className="filters">
            <div className="chip-group" role="group" aria-label="Filter by collection">
              <button
                type="button"
                className="chip"
                aria-pressed={category === 'all'}
                onClick={() => updateParam('category', 'all')}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`chip ${c.accentClass}`}
                  aria-pressed={category === c.id}
                  onClick={() => updateParam('category', c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="filter-fields">
              <div className="field">
                <label htmlFor="book-search">Search</label>
                <input
                  id="book-search"
                  type="search"
                  placeholder="Title, subject, or topic"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="book-level">Level</label>
                <select
                  id="book-level"
                  value={level}
                  onChange={(e) => updateParam('level', e.target.value)}
                >
                  <option value="all">All levels</option>
                  {levels.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <p className="result-count" role="status">
            Showing {filtered.length} of {books.length} books
          </p>

          {filtered.length === 0 ? (
            <div className="empty">
              <p>No books match those filters. Try a different search or clear the filters.</p>
              <button type="button" className="btn btn-ghost btn-small" onClick={reset}>
                Clear filters
              </button>
            </div>
          ) : (
            categories.map((c) => {
              const group = filtered.filter((b) => b.category === c.id);
              if (group.length === 0) return null;
              return (
                <section key={c.id} className={`book-group ${c.accentClass}`} aria-labelledby={`group-${c.id}`}>
                  <div className="book-group-head">
                    <h2 id={`group-${c.id}`}>{c.label}</h2>
                    <p>{c.description}</p>
                  </div>
                  <div className="book-grid">
                    {group.map((book) => (
                      <BookCard key={book.id} book={book} />
                    ))}
                  </div>
                </section>
              );
            })
          )}
        </div>
      </section>
    </>
  );
}
