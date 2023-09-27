import React, { useEffect, useState } from "react";
import "../styles/RecipeStyle.css";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    fetch("https://recipe-app-mern.onrender.com/auth/recipe", {
      method: "GET",
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
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
      // Confirm the deletion with the user
      if (window.confirm("Are you sure you want to delete this recipe?")) {
        // Send a DELETE request to the server
        const response = await fetch(
          `https://recipe-app-mern.onrender.com/auth/recipe/${recipeId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          alert("Recipe deleted successfully");

          window.location = "/recipes";
        } else {
          getRecipes();
          window.location = "/recipes";
        }
      }
    } catch (error) {
      console.error("An error occurred while deleting the recipe:", error);

      window.location.href = "/recipes";
    }
  };

  const handleAddToFavorites = async (recipeId) => {
    try {
      // Send a POST request to the LikedList controller
      const response = await fetch(
        `https://recipe-app-mern.onrender.com/auth/likedRecipes/${recipeId}`,
        {
          method: "POST",
        }
      );

      if (response.ok) {
        alert("Recipe added to favorites successfully");
        window.location.href = "/favouriteRecipes";
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error("An error occurred while adding to favorites:", error);
    }
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
          <button
            className="add-to-favorites-button"
            onClick={() => handleAddToFavorites(recipe._id)}
          >
            Add to Favorites
          </button>
          <Link to={"/addRecipes"}>Add more recipes</Link>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
