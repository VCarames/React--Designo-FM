import graphicProjectsData from "/public/data/graphicProjects";

function GraphicProjects() {
  return (
    <section className="projects-section">
      <h2 className="visually-hidden">Our Projects</h2>
      <div className="projects-section__content">
        <ul className="projects-section__list" role="list">
          {graphicProjectsData.graphicProjects.map((graphicProject) => (
            <li
              className="projects-section__item"
              key={graphicProject.id}
              role="listitem"
            >
              <img
                className="projects-section__image"
                src={graphicProject.image}
                alt=""
              />
              <div className="projects-section__container">
                <h3 className="projects-section__subheading">
                  {graphicProject.heading}
                </h3>
                <p className="projects-section__text">{graphicProject.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GraphicProjects;
