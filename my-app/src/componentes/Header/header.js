// src/componentes/Header/Header.js
import React from 'react';
import './header.css';
import logo from '../../logo.svg';
import HomeButton from '../Botoes/botaoHOME';
import AddVideoButton from '../Botoes/botaoADD';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Aluraflix Logo" draggable="false" />
      <nav>
        <ul>
          <li><HomeButton /></li>
          <li><AddVideoButton /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
