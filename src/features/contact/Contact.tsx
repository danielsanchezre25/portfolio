import React from 'react';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">¡Contacta conmigo!</h1>
      <p>
        Si quieres ponerte en contacto, tienes alguna pregunta o quieres desarrollar algún proyecto y no sabes cómo hacerlo, 
        entonces preguntame:
      </p>
      <form className="contact-form">
        <div className="input-group">
          <input type="text" id="name" name="name" />
          <label htmlFor="name">Nombre</label>
        </div>
        <div className="input-group">
          <input type="email" id="email" name="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-group">
          <textarea id="message" name="message" placeholder=" "></textarea>
          <label htmlFor="message">Mensaje</label>
        </div>
        <button type="submit">Envíar mensaje</button>
      </form>
    </div>
  )
}