import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.

//Filter through recipes array and display only those that do not match the index of the one that is to be deleted
  const deleteRecipe = (indexToDelete)=> setRecipes((currentRecipe)=> currentRecipe.filter((recipe,index)=> index !== indexToDelete))
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

//Add a new recipe object into the recipe array while keeping existing recipes within the array
//Use spread operator to copy existing recipes into new array
//Add new recipe to very end of array
const createRecipe =(newRecipe) => setRecipes((currentRecipe)=> [...currentRecipe, newRecipe]);

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}
 
export default App;
