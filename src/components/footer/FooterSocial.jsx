import { Link } from "react-router-dom";
import Facebook from "/public/assets/icon-facebook.svg";
import YouTube from "/public/assets/icon-youtube.svg";
import Twitter from "/public/assets/icon-twitter.svg";
import Pinterest from "/public/assets/icon-pinterest.svg";
import Instagram from "/public/assets/icon-instagram.svg";

function FooterSocial() {
  return (
    <ul className="footer__social-list" role="list">
      <li className="footer__social-item" role="listitem">
        <Link to="/" className="footer__social-link" aria-label="Facebook">
          <img src={Facebook} alt="" />
        </Link>
      </li>
      <li className="footer__social-item" role="listitem">
        <Link to="/" className="footer__social-link" aria-label="YouTube">
          <img src={YouTube} alt="" />
        </Link>
      </li>
      <li className="footer__social-item" role="listitem">
        <Link to="/" className="footer__social-link" aria-label="Twitter">
          <img src={Twitter} alt="" />
        </Link>
      </li>
      <li className="footer__social-item" role="listitem">
        <Link to="/" className="footer__social-link" aria-label="Pinterest">
          <img src={Pinterest} alt="" />
        </Link>
      </li>
      <li className="footer__social-item" role="listitem">
        <Link to="/" className="footer__social-link" aria-label="Instagram">
          <img src={Instagram} alt="" />
        </Link>
      </li>
    </ul>
  );
}

export default FooterSocial;
