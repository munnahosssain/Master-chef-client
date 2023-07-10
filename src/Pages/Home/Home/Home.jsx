import React from "react";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";
import ChefServices from "../ChefServices/ChefServices";
import LatestNews from "../LatestNews/LatestNews";
import Review from "../../Blog/Review/Review";
import Olive from "../Olive/Olive";

const Home = () => {
  return (
    <div>
      <Banner />
      <Chefs />
      <ChefServices />
      <LatestNews />
      <Olive />
      <Review />
    </div>
  );
};

export default Home;
