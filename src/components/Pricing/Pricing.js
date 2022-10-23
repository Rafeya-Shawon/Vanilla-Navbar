import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const priceOptions = [
    { id: 1, name: "Free", price: 0, features: [
        'Awesome Features', 'Extra Features', 'Unnecessary Features'
    ]},
    { id: 2, name: "Medium", price: 9.99, features: [
        'Everything on Medium', 'Extra Features', 'Unnecessary Features'
    ]},
    { id: 3, name: "Premium", price: 19.99, features: [
        'Everything on Premium', 'Extra Features', 'Unnecessary Features'
    ]},
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold bg-indigo-200 p-12 text-white">
        Best Deals Of the Town
      </h2>
      <div className="grid md:grid-cols-3 gap-3 mt-4">
        {priceOptions.map((option) => (
          <PriceOption key={priceOptions.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
