import React from "react";
import './Projects.css';
import projectsList from "./Projects.json";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            Recent <span>projects</span>
          </h1>
        </div>
        <div className="all-projects">
        { projectsList.map(project => {
          console.log(project);
            return (<Project key={project.name} name={project.name} category={project.category} description={project.description} imagePath={project.imagePath}/>);
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
