interface NavbarProps {
  title: string;
}

function Navbar({ title }: NavbarProps) {
  const links = ['About', 'Books', 'Community', 'Contact'];

  return (
    <nav>
      <a href="/" className="navbar-logo">
        {title}
      </a>

      <div className="navbar-links">
        {links.map((link) => (
          <a href={`/${link.toLowerCase()}`} key={link}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;