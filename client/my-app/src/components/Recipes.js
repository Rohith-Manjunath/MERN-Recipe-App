import React from "react";
import { useEffect, useState } from "react";

import "../styles/RecipeStyle.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2000/auth/recipe")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipe data");
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="Recipes">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="Recipe">
          <h2>{recipe.title}</h2>
          <img src={recipe.imageUrl} alt={recipe.title} />
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
