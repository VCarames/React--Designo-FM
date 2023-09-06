import { Link } from "react-router-dom";
import Logo from "/public/assets/logo-light.png";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link to="/" className="footer__logo" aria-label="Designo - Home">
          <img src={Logo} alt="" />
        </Link>

        <FooterNav />
        <FooterContact />
        <FooterSocial />
      </div>
    </footer>
  );
}

export default Footer;
