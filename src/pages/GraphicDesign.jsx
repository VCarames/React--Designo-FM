import Header from "../components/Header";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro";
import graphicProjectsData from "/public/data/graphicProjects";

function GraphicDesign() {
  return (
    <div>
      <Header />

      <main>
        <Intro
          heading="Graphic Design"
          text="We deliver eye-catching branding materials that are 
        tailored to meet your business objectives.
        "
        />

        <section className="graphic-projects-section">
          <h2 className="visually-hidden">Our Projects</h2>
          <div className="graphic-projects-section__content">
            <ul className="graphic-projects-section__list" role="list">
              {graphicProjectsData.graphicProjects.map((graphicProject) => (
                <li
                  className="graphic-projects-section__item"
                  key={graphicProject.id}
                  role="listitem"
                >
                  <img
                    className="graphic-projects-section__image"
                    src={graphicProject.image}
                    alt=""
                  />
                  <h3 className="graphic-projects-section__subheading">
                    {graphicProject.heading}
                  </h3>
                  <p className="graphic-projects-section__text">
                    {graphicProject.text}
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

export default GraphicDesign;
