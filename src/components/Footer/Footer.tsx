import React from 'react';
import './Footer.styles.scss';

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div>© {new Date().getFullYear()}</div>
        <div>
          <a href="https://www.mentorcliq.com" rel=" noopener">
            mentorcliQ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
