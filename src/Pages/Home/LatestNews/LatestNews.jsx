import React from "react";
import { BsFillTagsFill } from "react-icons/bs";
import news1 from "../../../assets/images/news1.png";
import news2 from "../../../assets/images/news2.png";
import news3 from "../../../assets/images/news3.png";

const LatestNews = () => {
  return (
    <div className="lg:mx-48 my-32">
      <div className="text-center">
        <h3 className="text-2xl">Our Bestseller</h3>
        <h1 className="text-5xl my-5 font-semibold">Latest Chop News</h1>
      </div>
      <div className="justify-center gap-5 grid lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 pt-10">
            <img src={news1} alt="news image" className="rounded-md" />
          </figure>
          <div className="card-body items-center text-center bg-[#f9f7ed] m-12 mt-[-40px] rounded-2xl">
            <p className="flex items-center">
              <BsFillTagsFill />
              Smoke-meat
            </p>
            <h2 className="card-title">How to cook perfect prime meat</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 pt-10">
            <img src={news2} alt="news image" className="rounded-md" />
          </figure>
          <div className="card-body items-center text-center bg-[#f9f7ed] m-12 mt-[-40px] rounded-2xl">
            <p className="flex items-center">
              <BsFillTagsFill />
              Smoke-meat
            </p>
            <h2 className="card-title">How to cook perfect prime meat</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md">
          <figure className="px-10 pt-10">
            <img src={news3} alt="news image" className="rounded-md" />
          </figure>
          <div className="card-body items-center text-center bg-[#f9f7ed] m-12 mt-[-40px] rounded-2xl">
            <p className="flex items-center">
              <BsFillTagsFill />
              Smoke-meat
            </p>
            <h2 className="card-title">How to cook perfect prime meat</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
