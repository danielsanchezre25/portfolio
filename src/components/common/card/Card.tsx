import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  languages?: string[];
}

export const Card: React.FC<CardProps> = ({ title, description, languages }) => {
  return (
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
  );
}