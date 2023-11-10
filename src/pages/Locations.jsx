import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";
import locationsData from "/public/data/locations";

function Locations() {
  return (
    <div>
      <Header />
      <main>
        <section className="locations-section">
          <h1 className="visually-hidden">Our Locations</h1>

          <div className="locations-section__content">
            <ul className="locations-section__list" role="list">
              {locationsData.locations.map((location) => (
                <li
                  className={`locations-section__list-item locations-section__list-item--${location.id}`}
                  id={`locations-section__list-item--${location.id}`}
                  key={location.id}
                  role="listitem"
                >
                  <picture className="locations-section__list-picture">
                    <source
                      media="(min-width: 62.5rem)"
                      srcset={location.imageLarge}
                    />
                    <source
                      media="(min-width: 37.5rem)"
                      srcset={location.imageMedium}
                    />
                    <img src={location.imageSmall} alt="" />
                  </picture>
                  <div className="locations-section__list-content">
                    <h2 className="locations-section__list-heading heading--secondary">
                      {location.location}
                    </h2>
                    <address className="locations-section__list-container locations-section__list-container--one">
                      <h3 className="locations-section__list-subheading text--tertiary">
                        {location.office}
                      </h3>
                      <p className="locations-section__list-address text--tertiary">
                        {location.address}
                      </p>
                    </address>

                    <div className="locations-section__list-container locations-section__list-container--two">
                      <h3 className="locations-section__list-subheading text--tertiary">
                        Contact
                      </h3>
                      <Link className="locations-section__list-phone text--tertiary">
                        P : {location.phone}
                      </Link>
                      <Link className="locations-section__list-email text--tertiary">
                        M : {location.email}
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Locations;
