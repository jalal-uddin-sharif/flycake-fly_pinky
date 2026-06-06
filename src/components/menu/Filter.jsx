import React from "react";
import CakeType from "./CakeType";
import Flavor from "./Flavor";
import PriceRange from "./PriceRange";
import Occasion from "./Occasion";
import Button from "./Button";

const Filter = () => {
  return (
    
    <section className="bg-surface-container-low  rounded-xl p-5 sticky top-18">
      <div className="flex justify-between">
        <h1 className="uppercase text-lg font-semibold">Filters</h1>
        <button className="text-primary cursor-pointer">Reset</button>
      </div>
      <CakeType/>
      <Flavor/>
      <PriceRange/>
      <Occasion/>
      <Button/>
      <div>
        
      </div>
      <div></div>
    </section>
  );
};

export default Filter;
