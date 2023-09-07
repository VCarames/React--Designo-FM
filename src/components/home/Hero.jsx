import { Link } from "react-router-dom";
import HeroImg from "/public/assets/home/desktop/image-hero-phone.png";

function Intro() {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <div className="hero-section__container">
          <h1 className="hero-section__heading primary-heading">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="hero-section__text primary-text">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link className="hero-section__btn btn">Learn More</Link>
        </div>
        <img className="hero-section__img" src={HeroImg} alt="" />
      </div>
    </section>
  );
}

export default Intro;
