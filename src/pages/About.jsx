import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import CTA from "../components/CTA";
import LocationLinks from "../components/shared/LocationLinks";

function About() {
  return (
    <div>
      <Header />

      <main>
        <LocationLinks />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default About;
