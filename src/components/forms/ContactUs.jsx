function ContactUs() {
  return (
    <section className="contact-section">
      <div className="contact-section__content">
        <div className="contact-section__container">
          <h1 className="contact-section__heading heading--primary">
            Contact Us
          </h1>
          <p className="contact-section__text text--primary">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <form className="contact-section__form" noValidate>
          <label className="visually-hidden" htmlFor="name">
            Name
          </label>
          <input
            className="contact-section__form-input"
            type="text"
            name="name"
            id=""
            placeholder="Name"
          />

          <label className="visually-hidden" htmlFor="email">
            Email Address
          </label>
          <input
            className="contact-section__form-input"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
          />

          <label className="visually-hidden" htmlFor="phone">
            Phone
          </label>
          <input
            className="contact-section__form-input"
            type="tel"
            name="phone"
            id=""
            placeholder="Phone"
          />

          <label className="visually-hidden" htmlFor="message">
            Your Message
          </label>
          <input
            className="contact-section__form-input"
            type="text"
            name="message"
            id=""
            placeholder="Your Message"
          />

          <button
            className="contact-section__form-button button button--primary"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
