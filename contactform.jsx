import React from 'react';

function ContactForm() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form">
        <label htmlFor="name" className="contact-label">Name:</label>
        <input type="text" id="name" name="name" className="contact-input" required />
        <label htmlFor="email" className="contact-label">Email:</label>
        <input type="email" id="email" name="email" className="contact-input" required />
        <label htmlFor="message" className="contact-label">Message:</label>
        <textarea id="message" name="message" className="contact-textarea" rows="4" required></textarea>
        <button type="submit" className="contact-button">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
