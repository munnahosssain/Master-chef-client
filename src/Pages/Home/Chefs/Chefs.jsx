import React, { useEffect, useState } from "react";
import Chef from "../Chef/Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://master-chef-server-munnahosssain.vercel.app/chefInfo")
      .then(res => res.json())
      .then(data => setChefs(data));
  }, []);

  return (
    <div className="lg:mx-48">
      <h1>All Chefs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chefs.map(chef => (
          <Chef key={chef._id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Chefs;
