import React, { useState } from 'react';
// import Recipe from '../Recipe/Recipe';
import Modal from '../Modal/Modal';
import './RecipeList.css';

function RecipeList({ recipes }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div
          key={recipe.id}
          className="recipe-card"
          onClick={() => handleCardClick(recipe)}
        >
          <img src={recipe.image} alt={recipe.name} />
          <h2>{recipe.name}</h2>
          <p>time:{recipe.time}</p>
        </div>
      ))}
      <Modal recipe={selectedRecipe} onClose={handleCloseModal} />
    </div>
  );
}

export default RecipeList;
