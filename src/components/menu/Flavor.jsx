import React from 'react';

const Flavor = () => {
    return (
        <div>
        <h2 className="my-4 text-lg">Flavor</h2>
        <select name="" id="" className="bg-white border border-outline-variant w-full p-4 focus:ring-4 focus:ring-primary focus:outline-none rounded-lg outline-none hover:outline-none ">
          <option value="">All</option>
          <option value="">Classic Vanilla</option>
          <option value="">Deep Chocolate</option>
          <option value="">Red Velvet</option>
          <option value="">Salted Caramel</option>
        </select>
        
      </div>
    );
};

export default Flavor;