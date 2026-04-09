import React from 'react';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>Contact with me!</h1>
      <p>If you want to get in touch, please fill out the form below:</p>
      <form className="contact-form">
        <div className="input-group">
          <input type="text" id="name" name="name" />
          <label htmlFor="name">Name:</label>
        </div>
        <div className="input-group">
          <input type="email" id="email" name="email" />
          <label htmlFor="email">Email:</label>
        </div>
        <div className="input-group">
          <textarea id="message" name="message"></textarea>
          <label htmlFor="message">Message:</label>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}