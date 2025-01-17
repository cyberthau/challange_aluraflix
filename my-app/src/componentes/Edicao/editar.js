import React from 'react';
  import './editar.css';
  import closeButton from '../../imagens/botaoSair.png';

  function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal">
          <img src={closeButton} alt="Close" className="close-button" onClick={onClose} />
          <h2>EDITAR CARD</h2>
          {children}
        </div>
      </div>
    );
  }

  export default Modal;
