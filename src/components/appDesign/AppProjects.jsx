import appProjectsData from "/public/data/appProjects";

function AppProjects() {
  return (
    <section className="projects-section">
      <h2 className="visually-hidden">Our Projects</h2>
      <div className="projects-section__content">
        <ul className="projects-section__list" role="list">
          {appProjectsData.appProjects.map((appProject) => (
            <li
              className="projects-section__item"
              key={appProject.id}
              role="listitem"
            >
              <img
                className="projects-section__image"
                src={appProject.image}
                alt=""
              />
              <div className="projects-section__container">
                <h3 className="projects-section__subheading">
                  {appProject.heading}
                </h3>
                <p className="projects-section__text">{appProject.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AppProjects;
