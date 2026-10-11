import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { site } from '../data/site';

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/books', label: 'Books', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/community', label: 'Community', end: false },
  { to: '/contact', label: 'Contact', end: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand" aria-label={`${site.name} home`}>
          <img src="/logo.png" alt="" width="32" height="32" />
          <span>{site.name}</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <nav id="primary-nav" className={`nav-links${open ? ' is-open' : ''}`} aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
