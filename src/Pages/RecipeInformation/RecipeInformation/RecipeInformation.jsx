import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "../ChefDetails/ChefDetails";
import RecipesDetails from "../RecipesDetails/RecipesDetails";

const RecipeInformation = () => {
  const chefsData = useLoaderData();
  const recipes = chefsData.recipes;

  return (
    <div>
      <ChefDetails chefsData={chefsData} />
      <RecipesDetails recipes={recipes} />
    </div>
  );
};

export default RecipeInformation;
