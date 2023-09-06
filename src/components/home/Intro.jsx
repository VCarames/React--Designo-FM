import { Link } from "react-router-dom";

function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-section__content">
        <h1 className="intro-section__heading">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="intro-section__text">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link className="intro-section__btn btn">Learn More</Link>
      </div>
    </section>
  );
}

export default Intro;
