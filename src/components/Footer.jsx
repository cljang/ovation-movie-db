import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <section className="brand">
          <div className="logo">
            <h2>ovation.</h2>
          </div>
          <div className="social-icons">
            <Link to={"#"}>
              <FaFacebook />
            </Link>
            <Link to={"#"}>
              <FaTwitter />
            </Link>
            <Link to={"#"}>
              <FaInstagram />
            </Link>
            <Link to={"#"}>
              <FaYoutube />
            </Link>
          </div>
        </section>
        <section className="site-map">
          <nav>
            <div>
              <h3 className="link-category">Explore</h3>
              <ul className="links">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/favourites"}>Favourite</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="link-category">Legal</h3>
              <ul className="links">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </nav>
        </section>
        <p className="copyright">&copy; {new Date().getFullYear()} Clayton Jang</p>
      </div>
    </footer>
  );
}

export default Footer;
