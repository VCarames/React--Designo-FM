import React from "react";

function Intro({ heading, text }) {
  return (
    <section className="intro-section">
      <div className="intro-section__content">
        <h1 className="intro-heading primary-heading">{heading}</h1>
        <p className="intro-text primary-text ">{text}</p>
      </div>
    </section>
  );
}

export default Intro;
