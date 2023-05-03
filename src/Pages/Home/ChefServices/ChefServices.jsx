import React from "react";
import car from "../../../assets/images/car.png";
import frozen from "../../../assets/images/frozen.png";
import friendly from "../../../assets/images/friendly.png";

const ChefServices = () => {
  return (
    <div className="lg:mx-48 my-32">
      <div className="text-center">
        <h3 className="text-2xl">What more do you need?</h3>
        <h1 className="text-5xl my-5 font-semibold">
          Reasons to buy Master Chop
        </h1>
      </div>
      <div className="justify-center gap-5 grid lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 pt-10">
            <img src={car} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shipping Overall</h2>
            <p>Amet volutpat consequat mauris nunc congue nisi.</p>
            <div className="card-actions">
              <button className="btn rounded-none">Go somewhere</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 pt-10">
            <img src={frozen} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Frozen Safety</h2>
            <p>Nulla at volutpat diam ut venenatis tellus in metus.</p>
            <div className="card-actions">
              <button className="btn rounded-none">Go somewhere</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 pt-10">
            <img src={friendly} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Eco-Friendly</h2>
            <p>Maecenas pharetra convallis posuere nir morbi.</p>
            <div className="card-actions">
              <button className="btn rounded-none">Go somewhere</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefServices;
