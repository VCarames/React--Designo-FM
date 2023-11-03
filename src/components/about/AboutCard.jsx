import React from "react";

function AboutCard(props) {
  return (
    <section className={`about-section ${props.sectionClass}`}>
      <div className={`about-section__content ${props.contentClass}`}>
        <picture className="about-section__picture">
          <source media="(min-width: 1000px)" srcSet={props.largeImageSrc} />
          <source media="(min-width: 600px)" srcSet={props.mediumImageSrc} />
          <img src={props.smallImageSrc} alt="" />
        </picture>
        <div className={`about-section__container ${props.containerClass}`}>
          <h2 className="about-section__heading heading--secondary">
            {props.heading}
          </h2>
          <p className="about-section__text about-section__text--one text--primary">
            {props.textOne}
          </p>
          <p className="about-section__text about-section__text--two text--primary">
            {props.textTwo}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutCard;
