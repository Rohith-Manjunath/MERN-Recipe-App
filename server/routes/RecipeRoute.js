const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  createRecipe,
  deleteRecipe,
} = require("../controllers/RecipeController");

router.post("/recipe", createRecipe);
router.get("/recipe", getAllRecipes);
router.delete("/recipe/:id", deleteRecipe);

module.exports = router;
