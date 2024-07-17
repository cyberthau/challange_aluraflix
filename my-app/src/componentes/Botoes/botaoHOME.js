import React from 'react';
import { Link } from 'react-router-dom';
import './botaoHOME.css';

function HomeButton() {
  return (
    <Link to="/" className="home-button">
      <div className="icon"></div>
      <span className="text">HOME</span>
    </Link>
  );
}

export default HomeButton;
