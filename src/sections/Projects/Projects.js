import React from "react";
import "./Projects.css";
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
          {projectsList.map((project) => {
            return (
              <Project
                key={project.name}
                name={project.name}
                category={project.category}
                description={project.description}
                imagePath={project.imagePath}
              />
            );
          })}

          <div className="project-item">
            <div className="project-info">
              <h1>More Good Stuff</h1>
              <h2>Github repos</h2>
              <p>Here are more projects I have worked on. They cover topics such as Frontend web development, Backend Web development, Database administration, Cloud computing, IoT and robotics.</p>
              <a href="https://github.com/lenny-of-the-cool-waters" type="button" className="github-btn">My Github</a>
            </div>
            <div className="project-image">
              <img src="/img/projects/github.jfif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
