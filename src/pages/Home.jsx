import Header from "../components/Header";
import Intro from "../components/home/Intro";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Benefits from "../components/home/Benefits";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Projects />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;
