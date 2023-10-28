import React from "react";
import { Link } from "react-router-dom";

function ProjectLink({ linkClass, heading, to }) {
  return (
    <>
      <div className={`project-link ${linkClass}`}>
        <h3 className="project-link__subheading secondary-heading">
          {heading}
        </h3>
        <Link className="project-links__link link" to={to}>
          <span>View Projects</span>

          <span>
            <img src="/public/assets/icon-right-arrow.svg" alt="" />
          </span>
        </Link>
      </div>
    </>
  );
}

export default ProjectLink;
