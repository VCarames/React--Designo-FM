import webProjectsData from "/public/data/webProjects";

function WebProjects() {
  return (
    <section className="projects-section">
      <h2 className="visually-hidden">Our Projects</h2>
      <div className="projects-section__content">
        <ul className="projects-section__list" role="list">
          {webProjectsData.webProjects.map((webProject) => (
            <li
              className="projects-section__item"
              key={webProject.id}
              role="listitem"
            >
              <img
                className="projects-section__image"
                src={webProject.image}
                alt=""
              />
              <div className="projects-section__container">
                <h3 className="projects-section__subheading subheading--secondary">
                  {webProject.heading}
                </h3>
                <p className="projects-section__text secondary-text">
                  {webProject.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WebProjects;
