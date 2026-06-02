import React from "react";
import CakeType from "./CakeType";
import Flavor from "./Flavor";

const Filter = () => {
  return (
    <section className="col-span-3 bg-surface-container-low  rounded-xl p-5">
      <div className="flex justify-between">
        <h1 className="uppercase text-lg font-semibold">Filters</h1>
        <button className="text-primary cursor-pointer">Reset</button>
      </div>
      <CakeType/>
      <Flavor/>
      <div>
        
      </div>
      <div></div>
    </section>
  );
};

export default Filter;
