import React, { useEffect, useState } from "react";
import Chef from "../Chef/Chef";
import Loading from "../../Shared/Loading/Loading";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://master-chef-server-munnahosssain.vercel.app/chefInfo")
      .then(res => res.json())
      .then(data => {
        setChefs(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="lg:mx-48 my-24">
      <h1 className="text-center mt-12 text-4xl font-semibold">All Chef's</h1>
      <h4 className="text-center mt-3 mb-6 text-2xl underline">
        All chefs are here
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <Loading />
        ) : (
          chefs.map(chef => <Chef key={chef._id} chef={chef} />)
        )}
      </div>
    </div>
  );
};

export default Chefs;
