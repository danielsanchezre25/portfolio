import React from 'react';
import './Projects.css';
import { Card } from '../../components/common/card/Card';
import { useTranslation } from 'react-i18next';

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    { 
      title: 'Eunifi', 
      description: t('projects.eunifi-description'), 
      chips: ['NextJS', 'TypeScript', 'Sass', 'Redux', 'Django', 'PostgreSQL'],
      url: 'https://eunifi.com/'
    },
    { 
      title: 'Erdos Tracks', 
      description: t('projects.erdos-description'), 
      chips: ['ReactJS', 'TypeScript', 'Redux', 'Material UI'],
      url: 'https://erdostracks.com/'
    },
    { 
      title: 'Friend of Hope, International', 
      description: t('projects.foh-description'), 
      chips: ['HTML5', 'CSS3', 'PHP', 'GoDaddy'],
      url: 'https://friendsofhopeintl.org/'
    },
  ];

  return (
    <div className="project-container">
      <h1 className="project-title">
        {t('projects.title')}
        <div className='project-title-line'></div>
      </h1>
      <p className="project-description">
        {t('projects.description')}
      </p>
      <div style={{ width: "100%", position: "relative", boxSizing: "border-box" }}>
        {projects.map((project, index) => (
          <Card 
            key={index} 
            title={project.title} 
            description={project.description} 
            chips={project.chips} 
            url={project.url} 
          />
        ))}
      </div>
    </div>
  );
}