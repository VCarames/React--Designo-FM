import webProjectsData from "/public/data/webProjects";

function WebProjects() {
  return (
    <section className="web-projects-section">
      <h2 className="visually-hidden">Our Projects</h2>
      <div className="web-projects-section__content">
        <ul className="web-projects-section__list" role="list">
          {webProjectsData.webProjects.map((webProject) => (
            <li
              className="web-projects-section__item"
              key={webProject.id}
              role="listitem"
            >
              <img
                className="web-projects-section__image"
                src={webProject.image}
                alt=""
              />
              <div className="web-projects-section__container">
                <h3 className="web-projects-section__subheading tertiary-heading">
                  {webProject.heading}
                </h3>
                <p className="web-projects-section__text secondary-text">
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
