import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', technologies: 'React, Node.js' },
    { title: 'Project 2', description: 'Description of project 2', technologies: 'MongoDB, Express.js' },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
