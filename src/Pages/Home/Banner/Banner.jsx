import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero banner-mage">
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">An</span>
            </span>{" "}
            Order food from the best restaurants and shop's
          </h1>
          <p className="mb-5">
            Are you hungry? Did you have a long and stressful day? Interested in
            getting a cheesy pizza delivered to your office or looking to avoid
            the weekly shop? Then Master Chef Saudi arabia is the right
            destination for you! Master Chef offers you a long and detailed list
            of the best restaurants and shops near you to help make your
            everyday easier.{" "}
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
