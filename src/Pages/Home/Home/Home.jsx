import React from "react";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";
import ChefServices from "../ChefServices/ChefServices";
import LatestNews from "../LatestNews/LatestNews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Chefs />
      <ChefServices />
      <LatestNews />
    </div>
  );
};

export default Home;
