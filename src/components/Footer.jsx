import React from "react";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
    const scrollToOurWork = () => {
        const ourWorkSection = document.getElementById('our-work-section');
        if (ourWorkSection) {
          ourWorkSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const scrollToHome = () => {
        const ourWorkSection = document.getElementById('home');
        if (ourWorkSection) {
          ourWorkSection.scrollIntoView({ behavior: 'auto' });
        }
      };
  return (
    <div>
      <div className="footer">
        <h4>Connect with us to upscale your business!</h4>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="./Assets/logo.png" alt="" />
          </div>
          <div className="footer-links">
            <button onClick={scrollToHome   }>Home</button>
            <button onClick={scrollToOurWork}>Our Work</button>
          </div>
        </div>
      </div>
      <div className="footer-base">
        <p>You can reach us at-</p>
        <div className="icon">
          <div className="icons1">
            <SocialIcon
              style={{ height: 28, width: 28 }}
              url="www.linkedin.com"
            />
          </div>
          <div className="icons1">
            <SocialIcon
              style={{ height: 28, width: 28 }}
              url="www.whatsapp.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
