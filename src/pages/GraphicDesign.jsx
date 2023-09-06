import Header from "../components/Header";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro";

function GraphicDesign() {
  return (
    <div>
      <Header />
      <Intro
        heading="Graphic Design"
        text="We deliver eye-catching branding materials that are 
        tailored to meet your business objectives.
        "
      />
      Graphic Design Page
      <main>
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default GraphicDesign;
