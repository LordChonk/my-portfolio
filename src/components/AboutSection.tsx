import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h1>About Me</h1>
        <p>Hi, I'm Adrian Hjert, a 23-year-old ICT graduate from KTH with an interest in anything related to technology, as well as aviation and sports!</p>
      </div>
      <img src="images/cockpit.jpg" alt="cockpit" />
    </div>
  );
}

export default AboutSection;
