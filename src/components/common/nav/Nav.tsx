import React from 'react';
import './Nav.css';
import { Switch } from '../switch/Switch';

export const Nav: React.FC = () => {
  return (
    <nav>
      <div className='nav-logo'>
        DS
      </div>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <Switch defaultOn={true} onChange={(isOn) => console.log('Switch is now', isOn)} />
    </nav>
  )
}

export default Nav;