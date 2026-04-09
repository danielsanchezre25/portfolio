import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Switch } from '../switch/Switch';

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const isDarkModeDefault = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isDarkModeDefault ? 'dark' : 'light';
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const toggleTheme = () => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
    console.log(document.documentElement.getAttribute('data-theme'))
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className='nav-logo'>
        DS<span className="dot">.</span>
      </div>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <Switch defaultOn={theme === 'dark'} onChange={toggleTheme} />
    </nav>
  )
}

export default Nav;