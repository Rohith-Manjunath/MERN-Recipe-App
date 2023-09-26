const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/middleware");

const {
  getAllRecipes,
  createRecipe,
  deleteRecipe,
} = require("../controllers/RecipeController");

router.post("/recipe", createRecipe);
router.get("/recipe", verifyToken, getAllRecipes);
router.delete("/recipe/:id", deleteRecipe);

module.exports = router;
