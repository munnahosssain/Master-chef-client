import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

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
        <LazyLoadImage
          effect="blur"
          delayTime={600}
          src={chefPicture}
          alt="chef picture"
        />
      </figure>
      <div className="card-body sm:p-10">
        <h2 className="card-title">{chefName}</h2>
        <p className="my-">Years of experience: {yearsOfExperience}</p>
        <p className="my-">Numbers of recipes {numberOfRecipes}</p>
        <p>Likes: {likes}</p>
        <div className="card-actions justify-end">
          <Link to={`/chef-info/${_id}`} className="btn btn-primary">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
