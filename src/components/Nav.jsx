import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="header">
      <a href="/">
        <img
          className="logo"
          src="../public/artlogo.png"
          alt="Chinese Art Gallery"
        />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link to="/" className="main-nav-link">
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link to="/about" className="main-nav-link">
              <div>About</div>
            </Link>
          </li>
          <li>
            <Link to="/history" className="main-nav-link">
              <div>History</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
