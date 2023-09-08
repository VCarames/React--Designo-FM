import Header from "../components/Header";
import Hero from "../components/home/Hero";

import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Benefits from "../components/home/Benefits";
import ProjectLinks from "../components/ProjectLinks";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectLinks />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;
