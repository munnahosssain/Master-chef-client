import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ChefDetails from "../ChefDetails/ChefDetails";
import RecipesDetails from "../RecipesDetails/RecipesDetails";
import Loading from "../../Shared/Loading/Loading";

const RecipeInformation = () => {
  const chefsData = useLoaderData();
  const recipes = chefsData.recipes;

  const navigate = useNavigate();
  if (navigate.state === "loading") {
    return <Loading />;
  }

  return (
    <div>
      <ChefDetails chefsData={chefsData} />
      <RecipesDetails recipes={recipes} />
    </div>
  );
};

export default RecipeInformation;
