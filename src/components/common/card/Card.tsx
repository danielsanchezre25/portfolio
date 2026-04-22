import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  chips?: string[];
  url?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, chips , url }) => {
  return (
    <a href={url} target="_blank">
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        {chips && (
          <div className="chips">
            {chips.map((chip, index) => (
              <span key={index} className="chip">
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </a> 
  );
}