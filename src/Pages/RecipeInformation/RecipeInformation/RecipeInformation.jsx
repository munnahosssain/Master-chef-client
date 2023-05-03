import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ChefDetails from "../ChefDetails/ChefDetails";
import RecipesDetails from "../RecipesDetails/RecipesDetails";
import Loading from "../../Shared/Loading/Loading";

const RecipeInformation = () => {
  const chefsData = useLoaderData();
  const recipes = chefsData.recipes;
  // const [loading, setLoading] = useState(true);
  // setTimeout(() => {
  //   setLoading(false);
  // }, 2000);

  const navigate = useNavigate();
  // console.log(navigate.state);
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
