import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Switch } from '../switch/Switch';
import { useTheme } from '../../../hooks/ThemeContext/ThemeContext';
import { useTranslation } from 'react-i18next';

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
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
        <li>
          <a href="#about">{t('about.title')}</a>
        </li>
        <li>
          <a href="#projects">{t('projects.title')}</a>
        </li>
        <li>
          <a href="#contact">{t('contact.title')}</a>
        </li>
      </ul>
      <Switch defaultOn={theme === 'dark'} onChange={setTheme} />
    </nav>
  )
}

export default Nav;