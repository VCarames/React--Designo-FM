import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
            looking for unique digital experiences that are relatable to your
            users, drop us a line.
          </p>
        </div>
        <form
          className="contact-section__form"
          noValidate
          onSubmit={handleSubmit}
        >
          <fieldset className="contact-section__form-fieldset">
            <label className="visually-hidden" htmlFor="name">
              Name
            </label>
            <input
              className="contact-section__form-input contact-section__form-input--name"
              type="text"
              name="name"
              id="name"
              aria-describedby="error--name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p
                className="contact-section__form-error contact-section__form-error--name"
                id="error--name"
              >
                {errors.name}
              </p>
            )}

            <label className="visually-hidden" htmlFor="email">
              Email Address
            </label>
            <input
              className="contact-section__form-input contact-section__form-input--email"
              type="email"
              name="email"
              id="email"
              aria-describedby="error--email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p
                className="contact-section__form-error contact-section__form-error--email"
                id="error--email"
              >
                {errors.email}
              </p>
            )}

            <label className="visually-hidden" htmlFor="phone">
              Phone
            </label>
            <input
              className="contact-section__form-input contact-section__form-input--phone"
              type="tel"
              name="phone"
              id="phone"
              aria-describedby="error--phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && (
              <p
                className="contact-section__form-error contact-section__form-error--phone"
                id="error--phone"
              >
                {errors.phone}
              </p>
            )}

            <label className="visually-hidden" htmlFor="message">
              Your Message
            </label>
            <input
              className="contact-section__form-input contact-section__form-input--message"
              type="text"
              name="message"
              id="message"
              aria-describedby="error--message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {errors.message && (
              <p
                className="contact-section__form-error contact-section__form-error--message"
                id="error--message"
              >
                {errors.message}
              </p>
            )}
          </fieldset>

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
