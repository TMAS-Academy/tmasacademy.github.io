interface NavbarProps {
  title: string;
}

function Navbar({ title }: NavbarProps) {
  return (
    <nav>
      <h1>{title}</h1>
    </nav>
  );
}

export default Navbar;