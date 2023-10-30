import React from "react";

function Intro({ heading, text }) {
  return (
    <section className="intro-section">
      <div className="intro-section__content">
        <h1 className="intro-section__heading heading--primary ">{heading}</h1>
        <p className="intro-section__text text--primary ">{text}</p>
      </div>
    </section>
  );
}

export default Intro;
