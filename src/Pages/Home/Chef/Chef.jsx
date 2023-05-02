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
  console.log(_id);
  return (
    <div className="card lg:card-side bg-base-100 shadow-md">
      <figure>
        <img src={chefPicture} alt="chef Picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <div>
          <p className="my-3">Years of experience: {yearsOfExperience}</p>
          <p className="my-3">Numbers of recipes {numberOfRecipes}</p>
          <p>Likes: {likes}</p>
        </div>
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
