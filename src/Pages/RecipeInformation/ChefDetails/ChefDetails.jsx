import React from "react";

const ChefDetails = ({ chefsData }) => {
  const { chefPicture, chefName, bio, numberOfRecipes, likes } = chefsData;
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
          <p className="py-6">Number of recipes {numberOfRecipes}</p>
          <p className="py-6"> Number of Likes {likes}</p>
          <p className="py-6">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
