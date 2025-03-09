import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <h1>Get in touch!</h1>
      <div className="contact-container">
        <p className="link-text"><strong>Email:</strong>&nbsp;<a href="mailto:adrian.hjert@gmail.com">adrian.hjert@gmail.com</a></p>
        <p className="link-text">|</p>
        <p className="link-text"><strong>Mobile:</strong>&nbsp;+46 (0)734 282 379</p>
        <p className="link-text">|</p>
        <p className="link-text"><strong>LinkedIn:</strong>&nbsp;<a href="https://se.linkedin.com/in/adrian-hjert-2a0471222" target="_blank" rel="noopener noreferrer">Adrian Hjert</a></p>
      </div>
    </div>
  );
}

export default Footer;
