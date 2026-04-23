import React, { useState } from 'react';
import './Contact.css';
import { Alert } from '../../components/common/alert/Alert';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  const [showAlert, setShowAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState<'success' | 'warning' | 'error' | undefined>(undefined);
  const [messageAlert, setMessageAlert] = useState('');


  const onSubmitContact = async(e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "3d802064-fe31-4a71-bc39-8242428ee181");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setTypeAlert('success');
      setMessageAlert('¡Mensaje enviado correctamente!');
    } else {
      setTypeAlert('error');
      setMessageAlert('¡Error al enviar el mensaje!');
    }
    setShowAlert(true);
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">
        {t('contact.title_friendly')}
        <div className='contact-title-line'></div>
      </h1>
      <p>
        {t('contact.description')}
      </p>
      <form className="contact-form" onSubmit={onSubmitContact}>
        <div className="input-group">
          <input type="text" id="name" name="name" placeholder=" " />
          <label htmlFor="name">{t('contact.form_fields.name')}</label>
        </div>
        <div className="input-group">
          <input type="email" id="email" name="email" placeholder=" " />
          <label htmlFor="email">{t('contact.form_fields.email')}</label>
        </div>
        <div className="input-group">
          <textarea id="message" name="message" placeholder=" "></textarea>
          <label htmlFor="message">{t('contact.form_fields.message')}</label>
        </div>
        <button type="submit">{t('contact.form_fields.submit')}</button>
      </form>
      {showAlert && <Alert message={messageAlert} type={typeAlert} duration={2000} onClose={() => setShowAlert(false)} />}
    </div>
  )
}