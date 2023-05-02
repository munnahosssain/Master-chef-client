import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const data = useLoaderData();
  const { chefPicture, chefName, bio, numberOfRecipes, likes } = data;
  console.log(data);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img
            src={chefPicture}
            alt="chef Picture"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="text-end mx-12">
          <h1 className="text-5xl font-bold">{chefName}</h1>
          <p className="py-6"> Number of recipes {numberOfRecipes}</p>
          <p className="py-6">Likes :{likes}</p>
          <p className="py-6">{bio}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
