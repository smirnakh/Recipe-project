import React from 'react';
import './Card.css';
import { ImSpoonKnife } from '@react-icons/all-files/im/ImSpoonKnife';
import { GiSandsOfTime } from '@react-icons/all-files/gi/GiSandsOfTime';

function Card({ recipe, index, ingredients }) {
  return (
    <div key={index} className="card">
      <img
        className="card-img"
        src={recipe.recipe.images.SMALL.url}
        alt="img"
      />

      <div>
        <h1>{recipe.recipe.label}</h1>

        <div className="cuisine">
          <p>{recipe.recipe.cuisineType[0]}</p>
        </div>
      </div>
      <div className="ingredients">
        {ingredients.map((ingredient) => {
          return (
            <ul>
              <li>{ingredient.text}</li>
            </ul>
          );
        })}
      </div>
      <button className="card-btn" src={recipe.recipe.url}>
        Full Recipe
      </button>

      <div className="time-servings">
        <p id="servings">
          <ImSpoonKnife /> {recipe.recipe.yield}
        </p>

        {!recipe.recipe.totalTime ? null : (
          <p id="time">
            <GiSandsOfTime /> {recipe.recipe.totalTime}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
