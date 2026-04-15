import React from 'react';
import './Projects.css';
import { Card } from '../../components/common/card/Card';

export const Projects: React.FC = () => {

  const projects = [
    { 
      title: 'Eunifi', 
      description: 'Eunifi systems allow the customer to prequalify with a soft credit pull at the beginning of the sales process, ' + 
      'allowing the sales staff to focus on qualified customers, while reducing dealership credit costs, and increasing online lead ' + 
      'generation.', 
      languages: ['React', 'TypeScript'],
      url: 'https://www.eunifi.com/'
    },
    { 
      title: 'Erdos Tracks', 
      description: 'Erdos Tracks is a cloud-based software for service businesses looking to increase profitability by creating a ' + 
      'more productive workforce and delivering a more engaging customer experience.', 
      languages: ['JavaScript', 'CSS'],
      url: 'https://www.erdostracks.com/'
    },
    { 
      title: 'Friend of Hope, International', 
      description: 'Friends of Hope International, Inc was founded by Esteban Almonte, Carmen L. Fernandez & Liony Batista. ' + 
      'Having worked in humanitarian disaster relief, project development and the collaboration of sustainable projects in Latin ' + 
      'America and the Caribbean, Mr. Batista, Mrs. Fernandez & Mr. Almonte felt the need to work independently with a group of ' + 
      'like-minded individuals to help empower others to forge their way out of poverty.', 
      languages: ['Python', 'Django'],
      url: 'https://friendsofhopeintl.org/'
    },
  ];

  return (
    <div className="project-container">
      <h1>PROYECTOS</h1>
      <p className="project-description">A continuación podrás ver algunos de los proyectos destacados en los que he trabajado, personales y empresariales:</p>
      {projects.map((project, index) => (
        <Card 
          key={index} 
          title={project.title} 
          description={project.description} 
          languages={project.languages} 
          url={project.url} 
        />
      ))}
    </div>
  );
}