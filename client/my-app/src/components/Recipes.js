import React, { useEffect, useState } from "react";
import "../styles/RecipeStyle.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
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
  };

  const handleDeleteRecipe = async (recipeId) => {
    try {
      const response = await fetch(
        `http://localhost:2000/auth/recipe/${recipeId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        if (
          window.confirm("Are you sure you wanna delete this recipe??") === true
        ) {
          alert("Recipe deleted successfully");
          setRecipes(response.recipes);
          window.location.href = "/recipes";
        } else {
          getRecipes();
          window.location.href = "/recipes";
        }
      } else {
        console.error("Failed to delete recipe:", response.status);
      }
    } catch (error) {
      console.error("An error occurred while deleting the recipe:", error);
    }

    window.location.href = "/recipes";
  };

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
          <button
            className="delete-button"
            onClick={() => handleDeleteRecipe(recipe._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
