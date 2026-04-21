import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© <b>2026</b> Daniel Sánchez. Todos los derechos reservados.</p>
      <p>Desarrollado con <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><b>ReactJS</b></a>, 
      <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer"><b> Vite</b></a> y 
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><b> CSS3</b></a>. 
      Desplegado en <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"><b>Vercel</b></a>.</p>
    </footer>
  );
}

export default Footer;