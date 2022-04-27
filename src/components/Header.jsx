import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [navOpen, setNavOpen] = useState(false)

  const handleNavButton = (e) => {
    e.preventDefault();
    setNavOpen(!navOpen)
  }

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <h1>ovation.</h1>
        </Link>
      </div>
      
      <button
        className={"navbar-btn" + (navOpen ? " navbar-toggled" : "")}
        id="btn-menu"
        aria-label="Navigation Menu"
        aria-controls="header-menu"
        aria-expanded={navOpen}
        onClick={handleNavButton}
      >
        <span className="bar" id="bar-1"></span>
        <span className="bar" id="bar-2"></span>
        <span className="bar" id="bar-3"></span>
      </button>
      <nav className={"navbar-nav" + (navOpen ? " navbar-toggled" : "")}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/favourites">Favourites</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
