import React from 'react';
import './Footer.css';
import logo from '../../logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Aluraflix Logo" className="footer-logo" />
    </footer>
  );
}

export default Footer;
