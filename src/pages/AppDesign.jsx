import Header from "../components/Header";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro";

function AppDesign() {
  return (
    <div>
      <Header />
      <Intro
        heading="App Design"
        text="Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips."
      />
      App Design Page
      <main>
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default AppDesign;
