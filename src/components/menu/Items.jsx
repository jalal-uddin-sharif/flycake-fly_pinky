import { getAllCakes } from "@/lib/cakes";
import React from "react";
import CakeGrid from "./CakeGrid";

const Items = () => {
  
  return (
    <div>
      <div className="space-y-6">
        <section className="flex justify-between items-center">
          <h2 className="text-md text-on-surface-variant">
            Showing <span className="font-bold text-black">12</span> Premium
            Cakes
          </h2>
          <div className="flex items-center gap-2">
            <h2 className="text-md">Sort by:</h2>
            <select
              name=""
              id=""
              className="bg-white border border-outline-variant pl-3 pr-9  focus:ring-1 focus:ring-primary focus:outline-none rounded-lg outline-none hover:outline-none "
            >
              <option value="">Featured Products</option>
              <option value="">Price: Low to High</option>
              <option value="">Price: High to Low</option>
              <option value="">Newer First</option>
            </select>
          </div>
        </section>
        <section>
        <CakeGrid/>
        </section>
      </div>
    </div>
  );
};

export default Items;
