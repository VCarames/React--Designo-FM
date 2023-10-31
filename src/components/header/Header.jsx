import { Link } from "react-router-dom";
import Logo from "/public/assets/logo-dark.png";
import NavBar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="header__logo" to="/" aria-label="Designo - Home">
          <img src={Logo} alt="" />
        </Link>

        <NavBar />
      </div>
    </header>
  );
}

export default Header;
