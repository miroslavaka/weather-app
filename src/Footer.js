import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <p className="footer-text">
        <a
          href="https://github.com/miroslavaka/weather-app"
          target="_blank"
          className="link"
        >
          Open-source code on GitHub
        </a>
        <span> by Miroslava Ka</span>
      </p>
    </footer>
  );
};
export default Footer;
