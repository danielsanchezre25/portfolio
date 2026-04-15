import React, { useEffect } from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  languages?: string[];
  url?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, languages, url }) => {
  return (
    <a href={url} target="_blank">
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        {languages && (
          <div className="languages">
            {languages.map((lang, index) => (
              <span key={index} className="language">
                {lang}
              </span>
            ))}
          </div>
        )}
      </div>
    </a> 
  );
}