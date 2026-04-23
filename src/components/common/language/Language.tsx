import React from 'react';
import './Language.css';
import { useTranslation } from 'react-i18next';

export const Language: React.FC = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = React.useState(i18n.language === 'en');

  const handleToggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'es' : 'en');
    setIsEnglish(!isEnglish);
  }

  return (
    <button className="language" onClick={handleToggleLanguage}>
      {isEnglish ? 'EN' : 'ES'}
    </button>
  );
}

export default Language;