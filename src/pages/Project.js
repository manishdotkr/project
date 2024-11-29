import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/project.css";
import projectConfig from "../config/projectConfig";

const Project = () => {
  const projects = [...projectConfig.projects];

  return (
    <article className="project" data-page="project">

      <div class="container">
        {projects.map((project) => (
          <Link to={project.to}>
            <div class="card">
              <div class="card-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Project;