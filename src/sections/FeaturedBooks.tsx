interface Book {
  title: string;
  subject: string;
  description: string;
}

function FeaturedBooks() {
  const books: Book[] = [
    {
      title: 'AP Chemistry',
      subject: 'Chemistry',
      description: 'A comprehensive guide for AP Chemistry.',
    },
    {
      title: 'Multivariable Calculus',
      subject: 'Mathematics',
      description: 'A comprehensive guide to multivariable calculus.',
    },
    {
      title: 'Differential Equations & Linear Algebra',
      subject: 'Mathematics',
      description: 'A guide covering differential equations and linear algebra.',
    },
  ];

  return (
    <section className="featured-books">
      <div className="section-content">
        <p className="section-eyebrow">Study Guides</p>

        <h2>Featured Books</h2>

        <div className="book-grid">
          {books.map((book) => (
            <article className="book-card" key={book.title}>
              <p className="book-subject">{book.subject}</p>

              <h3>{book.title}</h3>

              <p>{book.description}</p>

              <a href="/books">View Book</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedBooks;