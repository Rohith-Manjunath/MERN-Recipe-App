import React, { useState, useEffect } from "react";
import "../styles/likedProducts.css";

const LikedProducts = () => {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    // Call the async function to fetch liked products when the component mounts
    fetchLikedProducts();
  }, []);

  const fetchLikedProducts = async () => {
    try {
      // Make a GET request to the /api/liked-products endpoint
      const response = await fetch(
        "https://recipe-app-mern.onrender.com/auth/likedRecipes"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch liked products");
      }

      const data = await response.json();

      // Set the fetched data to the state
      setLikedProducts(data);
    } catch (error) {
      console.error("Error fetching liked products:", error);
    }
  };

  const handleRemoveItem = async (recipeId) => {
    try {
      if (
        window.confirm(
          "Are you sure you wanna remove this recipe from favourites??"
        )
      ) {
        const response = await fetch(
          `https://recipe-app-mern.onrender.com/auth/removeLiked/${recipeId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          alert("Item Removed successfully");
          fetchLikedProducts();
          window.location.href = "/favouriteRecipes";
        } else {
          const data = await response.json();
          console.error(data.error);
        }
      } else {
        window.location.href = "/favouriteRecipes";
      }
    } catch (error) {
      console.error("Error removing item from liked products:", error);
    }
  };

  return (
    <div className="likedRecipes">
      <h2>Liked Products</h2>
      <ul>
        {likedProducts.map((product) => (
          <li key={product._id} className="list">
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <img src={product.imageUrl} alt={product.title} />
              <h4>Ingredients:</h4>
              <ul>
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h4>Instructions:</h4>
              <ol>
                {product.instructions.split("\n").map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <button
                className="remove-item-button"
                onClick={() => handleRemoveItem(product._id)}
              >
                Remove Item
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedProducts;
