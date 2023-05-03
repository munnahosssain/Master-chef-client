import React, { useState } from "react";
import picture from "../../../assets/images/meat.jpg";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import { MdFavorite } from "react-icons/md";

const Recipes = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const { img, name, method, rating } = recipe;

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const notify = () => toast("Added to Favorites!");

  return (
    <div className="hero my-12">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="w-72 h-72 rounded-full" />
        <div className="ml-4">
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex mt-3">
            {recipe.ingredients.map((rcp, index) => (
              <p
                key={index}
                className="btn mr-2 btn-outline btn-sm font-semibold rounded-none"
              >
                {rcp}
              </p>
            ))}
          </div>
          <p className="py-3 text-xl">{method}</p>
          <div className="flex items-center">
            <StarRatings
              rating={rating}
              starRatedColor="green"
              numberOfStars={5}
              name="rating"
              className="w-24"
            />
            <p className="text-3xl ml-2 font-semibold">{rating}</p>
          </div>
          <div className="card-actions justify-end">
            <MdFavorite
              onClick={() => {
                handleFavorite();
                notify();
              }}
              size={48}
              color={favorite ? "red" : "gray"}
              className={`${favorite ? "btn-disabled" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
