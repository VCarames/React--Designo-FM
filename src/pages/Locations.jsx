import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";
import locationsData from "/public/data/locations";

function Locations() {
  return (
    <div>
      <Header />
      Locations Page
      <main>
        <section className="locations-section">
          <h1 className="visually-hidden">Our Locations</h1>

          <div className="locations-section__content">
            <ul className="locations-section__list" role="list">
              {locationsData.locations.map((location) => (
                <li
                  className="locations-section__list-item"
                  key={location.id}
                  role="listitem"
                >
                  <picture className="locations-section__list-picture">
                    <source
                      media="(min-width: 600px)"
                      srcset={location.imageLarge}
                    />
                    <img src={location.imageSmall} alt="" />
                  </picture>
                  <div className="locations-section__list-content">
                    <h2 className="locations-section__list-heading">
                      {location.location}
                    </h2>
                    <address className="locations-section__list-container">
                      <p className="locations-section__list-office">
                        {location.office}
                      </p>
                      <p className="locations-section__list-address">
                        {location.address}
                      </p>
                    </address>

                    <div className="locations-section__list-container">
                      <h3 className="locations-section__list-subheading">
                        Contact
                      </h3>
                      <Link className="locations-section__list-phone">
                        P : {location.phone}
                      </Link>
                      <Link className="locations-section__list-email">
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
