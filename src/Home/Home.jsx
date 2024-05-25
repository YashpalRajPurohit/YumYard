import React, { useState } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import recipesData from '../Data/recipes';
import './Home.css';
import logo from '../assets/file.png';


function Home() {
  const [recipes] = useState(recipesData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <nav className="navbar">
        <div className="navbar-section image-container"><img src={logo} alt='some-logo' /></div>
        <div className="navbar-section search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
        </div>
        <div className="navbar-section"></div>
      </nav>
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default Home;
