import React from "react";

function Intro({ heading, text }) {
  return (
    <section className="intro-section">
      <div className="intro-section__content">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default Intro;
