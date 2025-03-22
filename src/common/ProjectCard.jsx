import React from "react";

const ProjectCard = ({ src, link, h3, p }) => {
  return (
    <a href={link} target="_blank">
    <div className="card bg-base-100 w-96 text-center shadow-sm">
    <figure>
      <img className="h-[75%]"
        src={src}
        alt={`${h3} logo`}  />
    </figure>
    <div className="card-body">
      <h2><b>{h3}</b></h2>
      <p>{p}</p>
    </div>
  </div>
  </a>
  );
}

export default ProjectCard;