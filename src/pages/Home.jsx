import Header from "../components/Header";
import Hero from "../components/home/Hero";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Benefits from "../components/home/Benefits";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;
