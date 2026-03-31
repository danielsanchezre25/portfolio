import React from 'react';
import './Header.css';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';

export const Header: React.FC = () => {
  return (
    <header>
      <h1>Daniel Sánchez Restrepo</h1>
      <h2>Fullstack Engineer</h2>
      <div className="networks">
        <img className="network" src={github} alt="GitHub" />
        <img className="network" src={linkedin} alt="LinkedIn" />
        <img className="network" src={instagram} alt="Instagram" />
      </div>
    </header>
  )
}

export default Header;