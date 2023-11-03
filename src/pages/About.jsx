import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import CTA from "../components/CTA";
import AboutCard from "../components/about/AboutCard";
import LocationLinks from "../components/shared/LocationLinks";
import AboutUs from "../components/about/AboutUs";

function About() {
  return (
    <div>
      <Header />
      <main>
        <AboutUs />

        <AboutCard
          sectionClass="about-section--one"
          contentClass="about-section__content--one"
          containerClass="about-section__container--one"
          largeImageSrc="/public/assets/about/desktop/image-world-class-talent.jpg"
          mediumImageSrc="/public/assets/about/tablet/image-world-class-talent.jpg"
          smallImageSrc="/public/assets/about/mobile/image-world-class-talent.jpg"
          heading="World-class talent"
          textOne="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   "
          textTwo="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
        />

        <LocationLinks />

        <AboutCard
          sectionClass="about-section--two"
          contentClass="about-section__content--two"
          containerClass="about-section__container--two"
          largeImageSrc="/public/assets/about/desktop/image-real-deal.jpg"
          mediumImageSrc="/public/assets/about/tablet/image-real-deal.jpg"
          smallImageSrc="/public/assets/about/mobile/image-real-deal.jpg"
          heading="The real deal"
          textOne="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
          textTwo="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default About;
