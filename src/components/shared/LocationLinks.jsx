import { Link } from "react-router-dom";
import locationLinksData from "/public/data/locationLinks";

function LocationLinks() {
  return (
    <section className="links-section">
      <h2 className="visually-hidden">Our Locations</h2>
      <div className="links-section__content">
        <ul className="links-section__list" role="list">
          {locationLinksData.locationLinks.map((locationLink) => (
            <li
              className="links-section__list-item"
              key={locationLink.id}
              role="listitem"
            >
              <img
                className="links-section__list-icon"
                src={locationLink.icon}
                alt=""
              />
              <h3 className="links-section__list-heading">
                {locationLink.heading}
              </h3>
              <Link
                className="links-section__list-button button button--secondary"
                to={locationLink.to}
              >
                See Location
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default LocationLinks;
