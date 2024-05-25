import React from 'react';
import './Modal.css';

function Modal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{recipe.name}</h2>
        <h3>Time: {recipe.time}</h3>
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Modal;
