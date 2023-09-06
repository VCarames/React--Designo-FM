import PassionateIcon from "/public/assets/home/desktop/illustration-passionate.svg";
import ResourcefulIcon from "/public/assets/home/desktop/illustration-resourceful.svg";
import FriendlyIcon from "/public/assets/home/desktop/illustration-friendly.svg";

function Benefits() {
  return (
    <section className="benefits-section">
      <h2 className="visually-hidden">Why Us</h2>
      <ul className="benefits-section__list" role="list">
        <li className="benefits-section__item" role="listitem">
          <img className="benefits-section__icon" src={PassionateIcon} alt="" />
          <h3 className="benefits-section__subheading">Passionate</h3>
          <p className="benefits-section__text">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </li>
        <li className="benefits-section__item" role="listitem">
          <img
            className="benefits-section__icon"
            src={ResourcefulIcon}
            alt=""
          />
          <h3 className="benefits-section__subheading">Resourceful</h3>
          <p className="benefits-section__text">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </li>
        <li className="benefits-section__item" role="listitem">
          <img className="benefits-section__icon" src={FriendlyIcon} alt="" />
          <h3 className="benefits-section__subheading">Friendly</h3>
          <p className="benefits-section__text">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Benefits;
