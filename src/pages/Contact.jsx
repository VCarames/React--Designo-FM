import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import LocationLinks from "../components/shared/LocationLinks";
import ContactUs from "../components/forms/ContactUs";

function Contact() {
  return (
    <div>
      <Header />
      <main>
        <ContactUs />
        <LocationLinks />
      </main>
      <Footer footerClass="footer--contact" />
    </div>
  );
}

export default Contact;
