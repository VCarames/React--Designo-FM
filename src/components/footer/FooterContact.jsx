function FooterContact() {
  return (
    <address className="footer__address">
      <ul className="footer__address-list" role="list">
        <li className="footer__address-item" role="listitem">
          <p className="footer__address-heading">Designo Central Office</p>
          <a
            className="footer__address-location"
            href="http://maps.google.com/?q=3886 Wellington Street Toronto, Ontario M9C 3J5 "
          >
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </a>
        </li>
        <li className="footer__address-item" role="listitem">
          <p className="footer__address-heading">Contact Us (Central Office)</p>
          <a className="footer__address-phone" href="tel:+1 253-863-8967">
            P : +1 253-863-8967
          </a>
          <a className="footer__address-email" href="mailto:contact@designo.co">
            M : contact@designo.co
          </a>
        </li>
      </ul>
    </address>
  );
}

export default FooterContact;
