import React, { useState } from "react";
import picture from "../../../assets/images/meat.jpg";
import StarRatings from "react-star-ratings";

const Recipes = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const { name, method, rating } = recipe;
  //   console.log(name);

  return (
    <div className="hero my-12">
      <div className="hero-content flex-col lg:flex-row">
        <img src={picture} className="w-72 h-72 rounded-full" />
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
          <div className="flex items-center mb-3">
            <StarRatings
              rating={rating}
              // starRatedColor="yellow"
              numberOfStars={6}
              name="rating"
              className="w-24"
            />
            <p className="text-3xl ml-2 font-semibold">{rating}</p>
          </div>
          <button className="btn btn-primary">Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
