import React from "react";

const PriceRange = () => {
  return (
    <div>
      <div className="my-4 flex justify-between items-center">
        <label className="text-lg">Price Range</label>
        <span className="font-bold text-primary">$20 - $150</span>
      </div>
      <div>
        <input type="range" min={20} max={500} step={10}  className="w-full accent-primary bg-outline-variant rounded-lg h-2 cursor-pointer  appearance-none" />
      </div>
    </div>
  );
};

export default PriceRange;
