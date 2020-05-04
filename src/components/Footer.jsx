import React from 'react';
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="text-center bg-dark text-white text-muted p-2">Copyright ⓒ {year}</p>
    </footer>
  );
};

export default Footer;
