import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p>© <b>2026</b> Daniel Sánchez. {t('footer.rights')}</p>
      <p>{t('footer.built_with')}<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><b>ReactJS</b></a>, 
      <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer"><b> Vite</b></a> y 
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><b> CSS3</b></a>. 
      {t('footer.deployed_on')}<a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"><b>Vercel</b></a>.</p>
    </footer>
  );
}

export default Footer;