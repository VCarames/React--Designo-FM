import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navMenuRef = useRef();
  const navToggleRef = useRef();

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        closeNav();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const toggleNav = () => {
    setIsNavExpanded((prevExpanded) => !prevExpanded);
    if (!isNavExpanded) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };

  const closeNav = () => {
    setIsNavExpanded(false);
    document.body.classList.remove("disable-scroll");
  };

  const handleFocusOut = (event) => {
    if (!navMenuRef.current.contains(event.relatedTarget)) {
      closeNav();
    }
  };

  return (
    <nav className="nav" aria-label="main">
      <button
        className="nav__toggle"
        aria-expanded={isNavExpanded}
        aria-controls="nav__menu-list"
        aria-label="menu"
        onClick={toggleNav}
        ref={navToggleRef}
      >
        <span className="nav__toggle-line" />
        <span className="nav__toggle-line" />
        <span className="nav__toggle-line" />
      </button>
      <ul
        className={`nav__menu-list${isNavExpanded ? " expanded" : ""}`}
        id="nav__menu-list"
        role="list"
        ref={navMenuRef}
        onBlur={handleFocusOut}
      >
        <li className="nav__menu-item" role="listitem">
          <Link to="/about" className="nav__menu-link">
            Our Company
          </Link>
        </li>
        <li className="nav__menu-item" role="listitem">
          <Link to="/locations" className="nav__menu-link">
            Locations
          </Link>
        </li>
        <li className="nav__menu-item" role="listitem">
          <Link to="/contact" className="nav__menu-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
