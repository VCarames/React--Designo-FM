import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <nav className="footer__nav">
      <ul className="footer__nav-list" role="list">
        <li className="footer__nav-item secondary-link" role="listitem">
          <Link to="/about" className="footer__nav-link">
            Our Company
          </Link>
        </li>
        <li className="footer__nav-item secondary-link" role="listitem">
          <Link to="/locations" className="footer__nav-link">
            Locations
          </Link>
        </li>
        <li className="footer__nav-item secondary-link" role="listitem">
          <Link to="/contact" className="footer__nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
