import React from 'react'
import './About.css'
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='about-container'>
      <p>
        {t('about.description.i-am')} {t('about.description.fullstack')} {t('about.description.solutions')} 
        <b>{t('about.description.javascript')}</b> {t('about.description.creating')} <b>{t('about.description.postgresql')}</b>.
        <br />
        <br />
        {t('about.description.focus')} <b>{t('about.description.problems')}</b>{t('about.description.but')} <b>{t('about.description.user')}</b>.
      </p>
    </div>
  )
} 