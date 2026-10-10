import { Link } from 'react-router-dom';
import Logo from './Logo';
import { navLinks } from './Navbar';
import { site } from '../data/site';
import { categories } from '../data/books';

export default function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="brand" aria-label={`${site.name} home`}>
            <Logo />
            <span>{site.name}</span>
          </Link>
          <p>
            A student-led nonprofit making high-quality STEM education freely available to everyone.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer-title">Explore</h2>
          <ul className="footer-list">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer-title">Books</h2>
          <ul className="footer-list">
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/books?category=${c.id}`}>{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Get in touch</h2>
          <ul className="footer-list">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {socials.map(([name, url]) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noreferrer">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <p>© {new Date().getFullYear()} {site.name}. All books are free to read and share.</p>
      </div>
    </footer>
  );
}
