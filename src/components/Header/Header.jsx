import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a className="navbar-link" href="/">
          Shop
        </a>
        <a className="navbar-link" href="/">
          FAQ
        </a>
        <a className="navbar-link" href="/">
          About us
        </a>
      </nav>
    </header>
  );
}

export default Header;
