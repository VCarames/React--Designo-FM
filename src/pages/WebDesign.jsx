import React from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro";

import webProjectsData from "/public/data/webProjects";

function WebDesign() {
  return (
    <div>
      <Header />
      <main>
        <Intro
          heading="Web Design"
          text="We build websites that serve as powerful marketing tools 
and bring memorable brand experiences."
        />
        <section className="web-projects-section">
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
                  <h3 className="web-projects-section__subheading">
                    {webProject.heading}
                  </h3>
                  <p className="web-projects-section__text">
                    {webProject.text}
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

export default WebDesign;
