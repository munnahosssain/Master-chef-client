import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {
    _id,
    chefPicture,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
  } = chef;

  return (
    <div className="card lg:card-side bg-base-100 shadow-md">
      <figure>
        <img src={chefPicture} alt="chef Picture" />
      </figure>
      <div className="card-body sm:p-10">
        <h2 className="card-title">{chefName}</h2>
        <p className="my-">Years of experience: {yearsOfExperience}</p>
        <p className="my-">Numbers of recipes {numberOfRecipes}</p>
        <p>Likes: {likes}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" to={`/${_id}`}>
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
