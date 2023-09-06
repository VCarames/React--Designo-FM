import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="visually-hidden">Our Previous Projects</h2>

      <ul className="projects-section__list" role="list">
        <li className="projects-section__item" role="listitem">
          <h3 className="projects-section__subheading">Web Design</h3>
          <Link className="projects-section__link" to="webdesign">
            View Projects
          </Link>
        </li>
        <li className="projects-section__item" role="listitem">
          <h3 className="projects-section__subheading">App Design</h3>
          <Link className="projects-section__link" to="appdesign">
            View Projects
          </Link>
        </li>
        <li className="projects-section__item" role="listitem">
          <h3 className="projects-section__subheading">Graphic Design</h3>
          <Link className="projects-section__link" to="graphicdesign">
            View Projects
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
