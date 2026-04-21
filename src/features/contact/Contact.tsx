import React, { useState } from 'react';
import './Contact.css';

export const Contact: React.FC = () => {

  const [result, setResult] = useState("");

  const onSubmitContact = async(e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "3d802064-fe31-4a71-bc39-8242428ee181");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">
       Contacta conmigo
       <div className='contact-title-line'></div>
      </h1>
      <p>
        Si quieres ponerte en contacto, tienes alguna pregunta o quieres desarrollar algún proyecto y no sabes cómo hacerlo, 
        entonces preguntame:
      </p>
      <form className="contact-form" onSubmit={onSubmitContact}>
        <div className="input-group">
          <input type="text" id="name" name="name" placeholder=" " />
          <label htmlFor="name">Nombre</label>
        </div>
        <div className="input-group">
          <input type="email" id="email" name="email" placeholder=" " />
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