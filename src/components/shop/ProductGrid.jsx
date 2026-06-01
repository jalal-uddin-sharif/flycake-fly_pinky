import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductGrid = ({ trendingCakes, col = 4 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-10 ">
      {trendingCakes?.map((cake) => (
        <div
          key={cake.id}
          className="relative rounded-lg overflow-hidden w-full shadow-md bg-surface transition-all group hover:-translate-y-2 flex flex-col justify-between"
        >
          <section>
            <img
              className="w-full object-cover transition-transform group-hover:scale-105 duration-300"
              src={cake.image}
            />
            <div className="bg-[#fcf9f8e6] font-semibold text-sm flex items-center absolute top-3 right-3 px-2 py-1 gap-2 rounded-md">
              <span>
                <FaStar size={12} className="text-yellow-500" />
              </span>
              <span>{cake.rating}</span>
            </div>
            <div className="p-4 space-y-4">
              <div className="">
                <h1 className="text-h3">{cake.name}</h1>
                <p className="text-sm text-on-surface-variant line-clamp-2">
                  {cake.description}
                </p>
              </div>
              {/* price section  */}
              {/* <div className=" flex justify-between items-center">
              <h1 className="text-[20px] font-semibold text-primary">
                {" "}
                {cake.price}
              </h1>
              <button className="group/cart border-2 border-primary hover:text-white rounded-lg hover:bg-primary cursor-pointer transition-all duration-500">
                <MdOutlineAddShoppingCart
                  className="m-2 text-2xl text-primary group-hover/cart:text-white"
                  // size={25}
                />
              </button>
            </div> */}
            </div>
          </section>
          {/* price section  */}
          <div className=" flex justify-between items-center px-4 pb-4">
            <h1 className="text-[20px] font-semibold text-primary">
              {" "}
              {cake.price}
            </h1>
            <button className="group/cart border-2 border-primary hover:text-white rounded-lg hover:bg-primary cursor-pointer transition-all duration-500">
              <MdOutlineAddShoppingCart
                className="m-2 text-2xl text-primary group-hover/cart:text-white"
                // size={25}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
