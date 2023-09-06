import Header from "../components/Header";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro";
import appProjectsData from "/public/data/appProjects";

function AppDesign() {
  return (
    <div>
      <Header />
      <main>
        <Intro
          heading="App Design"
          text="Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips."
        />

        <section className="app-projects-section">
          <h2 className="visually-hidden">Our Projects</h2>
          <div className="app-projects-section__content">
            <ul className="app-projects-section__list" role="list">
              {appProjectsData.appProjects.map((appProject) => (
                <li
                  className="app-projects-section__item"
                  key={appProject.id}
                  role="listitem"
                >
                  <img
                    className="app-projects-section__image"
                    src={appProject.image}
                    alt=""
                  />
                  <h3 className="app-projects-section__subheading">
                    {appProject.heading}
                  </h3>
                  <p className="app-projects-section__text">
                    {appProject.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default AppDesign;
