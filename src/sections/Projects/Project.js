import React from "react";

const Project = ({name, category, description, imagePath}) => {
  return (
    <div className="project-item">
      <div className="project-info">
        <h1>{name}</h1>
        <h2>{category}</h2>
        <p>{description}</p>
      </div>
      <div className="project-image">
        <img src={imagePath} alt="" />
      </div>
    </div>
  );
};

export default Project;
