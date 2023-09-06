import Header from "../components/Header";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";

function AppDesign() {
  return (
    <div>
      <Header />
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
