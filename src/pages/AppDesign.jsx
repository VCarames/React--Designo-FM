import Header from "../components/Header";

import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro";

import AppProjects from "../components/appDesign/AppProjects";
import ProjectLinks from "../components/ProjectLinks";

function AppDesign() {
  return (
    <div>
      <Header />
      <main>
        <Intro
          heading="App Design"
          text="Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips."
        />

        <AppProjects />
        <ProjectLinks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default AppDesign;
