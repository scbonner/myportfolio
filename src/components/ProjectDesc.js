import React from 'react';
import ProjectDesc from '../data/projectdesc';

const ProjectDesc = () => {
  let project = ProjectList.map((project) => {
    return (
      <li className="project" key={project.id} >
        <img className="project-img" src={project.img_src} alt="project" />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Projects</h2>
      <ul className="group">
        {projects}    
      </ul>
    </div>
  );
}

export default ProjectDesc;