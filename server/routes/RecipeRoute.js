const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  createRecipe,
} = require("../controllers/RecipeController");

router.post("/recipe", createRecipe);

router.get("/recipe", getAllRecipes);

module.exports = router;
