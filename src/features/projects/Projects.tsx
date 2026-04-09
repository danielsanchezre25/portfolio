import React from 'react';
import './Projects.css';
import { Card } from '../../components/common/card/Card';

export const Projects: React.FC = () => {

  const projects = [
    { title: 'Eunifi', description: 'Eunifi systems allow the customer to prequalify with a soft credit pull at the beginning of the sales process, allowing the sales staff to focus on qualified customers, while reducing dealership credit costs, and increasing online lead generation.', languages: ['React', 'TypeScript'] },
    { title: 'Project 2', description: 'Description of project 2', languages: ['JavaScript', 'CSS'] },
    { title: 'Project 3', description: 'Description of project 3', languages: ['Python', 'Django'] },
  ];

  return (
    <div className="project-container">
      <h1>Proyectos</h1>
      <p>A continuación podrás ver algunos de los proyectos destacados en los que he trabajado, personales y empresariales:</p>
      {projects.map((project, index) => (
        <Card key={index} title={project.title} description={project.description} languages={project.languages} />
      ))}
    </div>
  );
}