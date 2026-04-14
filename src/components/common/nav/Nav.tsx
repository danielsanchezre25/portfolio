import React, { useEffect, useState, useContext } from 'react';
import './Nav.css';
import { Switch } from '../switch/Switch';
import { useTheme } from '../../../hooks/ThemeContext/ThemeContext';

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className='nav-logo'>
        DS<span className="dot">.</span>
      </div>
      <ul>
        <li><a href="/about">Acerca de</a></li>
        <li><a href="/projects">Proyectos</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
      <Switch defaultOn={theme === 'dark'} onChange={setTheme} />
    </nav>
  )
}

export default Nav;