import React from 'react'
import './About.css'
import { useTranslation } from 'react-i18next';
import Resume from '../../assets/daniel_sanchez_resume.pdf'
import CV from '../../assets/daniel_sanchez_hoja_de_vida.pdf'

export const About: React.FC = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className='about-container'>
      <p>
        {t('about.description.i-am')} {t('about.description.fullstack')} {t('about.description.solutions')} 
        <b>{t('about.description.javascript')}</b> {t('about.description.creating')} <b>{t('about.description.postgresql')}</b>.
        <br />
        <br />
        {t('about.description.focus')} <b>{t('about.description.problems')}</b>{t('about.description.but')} <b>{t('about.description.user')}</b>.
      </p>
      <button className='about-button' onClick={() => window.open(i18n.language === 'en' ? Resume : CV, '_blank')}>
        {t('about.download_resume')} 
        <svg className="download-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
        </svg>
      </button>
    </div>
  )
} 