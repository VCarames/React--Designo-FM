import React from "react";

function Intro({ heading, text }) {
  return (
    <section className="intro-section">
      <div className="intro-section__content">
        <h1 className="intro-section__heading primary-heading">{heading}</h1>
        <p className="intro-section__text primary-text ">{text}</p>
      </div>
    </section>
  );
}

export default Intro;
