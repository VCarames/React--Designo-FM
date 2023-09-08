import { Link } from "react-router-dom";

function ProjectLinks() {
  return (
    <section className="project-links-section">
      <h2 className="visually-hidden">Our Previous Projects</h2>

      <ul className="project-links-section__list" role="list">
        <li className="project-links-section__item item--web" role="listitem">
          <h3 className="project-links-section__subheading secondary-heading">
            Web Design
          </h3>
          <Link className="project-links-section__link link" to="/webdesign">
            <span>View Projects</span>

            <span>
              <img src="/public/assets/icon-right-arrow.svg" alt="" />
            </span>
          </Link>
        </li>
        <li className="project-links-section__item item--app" role="listitem">
          <h3 className="project-links-section__subheading secondary-heading">
            App Design
          </h3>
          <Link className="project-links-section__link link" to="/appdesign">
            <span>View Projects</span>

            <span>
              <img src="/public/assets/icon-right-arrow.svg" alt="" />
            </span>
          </Link>
        </li>
        <li
          className="project-links-section__item item--graphic"
          role="listitem"
        >
          <h3 className="project-links-section__subheading secondary-heading">
            Graphic Design
          </h3>
          <Link
            className="project-links-section__link link"
            to="/graphicdesign"
          >
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

export default ProjectLinks;
