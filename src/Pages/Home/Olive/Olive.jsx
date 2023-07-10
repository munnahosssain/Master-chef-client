import React from "react";

const Olive = () => {
  return (
    <section className="bg-gray-200 h-screen flex items-center justify-center bg-image">
      <div className="container mx-auto px-4">
        <div className="w-[50rem]">
          <div className="bg-green-600 rounded-lg shadow-lg p-6">
            <h2 className="text-white text-xl font-bold mb-4">
              Gourmet Oils and Vinegars
            </h2>
            <p className="text-white">
              Choose from the finest flavors of Oils and Vinegars in our shop.
              Our signature brand of Extra Virgin Olive Oils are 100% naturally
              infused with flavors from Blood Orange to Herbs de Provence. Our
              Italian Balsamic Vinegars are aged 18 years and are 100% natural
              and a perfect complement to our oils.
            </p>
          </div>
        </div>
        <div className="w-[50rem] mt-6">
          <div className="bg-green-500 rounded-lg shadow-lg p-4">
            <h2 className="text-white text-xl font-bold mb-4">
            Shop Our Gourmet Olive Oils & Vinegars
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Olive;
