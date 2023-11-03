function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-section__content">
        <picture className="about-section__picture">
          <source
            media="(min-width: 1000px)"
            srcSet="/public/assets/about/desktop/image-about-hero.jpg"
          />
          <source
            media="(min-width: 600px)"
            srcSet="/public/assets/about/tablet/image-about-hero.jpg"
          />
          <img src="/public/assets/about/mobile/image-about-hero.jpg" alt="" />
        </picture>
        <div className="about-section__container">
          <h1 className="about-section__heading heading--primary">About Us</h1>
          <p className="about-section__text text--primary">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
