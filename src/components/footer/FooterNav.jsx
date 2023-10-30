import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <nav className="footer__nav">
      <ul className="footer__nav-list" role="list">
        <li className="footer__nav-item" role="listitem">
          <Link to="/about" className="footer__nav-link link--secondary">
            Our Company
          </Link>
        </li>
        <li className="footer__nav-item" role="listitem">
          <Link to="/locations" className="footer__nav-link link--secondary">
            Locations
          </Link>
        </li>
        <li className="footer__nav-item" role="listitem">
          <Link to="/contact" className="footer__nav-link link--secondary">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
