import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero banner-mage">
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">
            Order food from the best restaurants and shop
          </h1>
          <p className="mb-5">
            Are you hungry? Did you have a long and stressful day? Interested in
            getting a cheesy pizza delivered to your office or looking to avoid
            the weekly shop? Then foodpanda Bangladesh is the right destination
            for you! foodpanda offers you a long and detailed list of the best
            restaurants and shops near you to help make your everyday easier.{" "}
          </p>
          <Link to="/blog">
            <button className="btn btn-wide border-red-50">Click Here</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
