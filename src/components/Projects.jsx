import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="visually-hidden">Our Previous Projects</h2>

      <ul className="projects-section__list" role="list">
        <li className="projects-section__item item--web" role="listitem">
          <h3 className="projects-section__subheading secondary-heading">
            Web Design
          </h3>
          <Link className="projects-section__link link" to="/webdesign">
            <span>View Projects</span>

            <span>
              <img src="/public/assets/icon-right-arrow.svg" alt="" />
            </span>
          </Link>
        </li>
        <li className="projects-section__item item--app" role="listitem">
          <h3 className="projects-section__subheading secondary-heading">
            App Design
          </h3>
          <Link className="projects-section__link link" to="/appdesign">
            <span>View Projects</span>

            <span>
              <img src="/public/assets/icon-right-arrow.svg" alt="" />
            </span>
          </Link>
        </li>
        <li className="projects-section__item item--graphic" role="listitem">
          <h3 className="projects-section__subheading secondary-heading">
            Graphic Design
          </h3>
          <Link className="projects-section__link link" to="/graphicdesign">
            <span>View Projects</span>
            <span>
              <img src="/public/assets/icon-right-arrow.svg" alt="" />
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
