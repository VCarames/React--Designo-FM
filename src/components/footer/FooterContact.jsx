function FooterContact() {
  return (
    <address className="footer__address">
      <ul className="footer__address-list" role="list">
        <li
          className="footer__address-item footer__address-item--one "
          role="listitem"
        >
          <p className="footer__address-heading link--tertiary ">
            Designo Central Office
          </p>
          <a
            className="footer__address-location footer__contact link--tertiary "
            href="http://maps.google.com/?q=3886 Wellington Street Toronto, Ontario M9C 3J5 "
          >
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </a>
        </li>
        <li
          className="footer__address-item footer__address-item--two "
          role="listitem"
        >
          <p className="footer__address-heading link--tertiary ">
            Contact Us (Central Office)
          </p>
          <a
            className="footer__address-phone footer__contact link--tertiary "
            href="tel:+1 253-863-8967"
          >
            P : +1 253-863-8967
          </a>
          <a
            className="footer__address-email footer__contact link--tertiary "
            href="mailto:contact@designo.co"
          >
            M : contact@designo.co
          </a>
        </li>
      </ul>
    </address>
  );
}

export default FooterContact;
