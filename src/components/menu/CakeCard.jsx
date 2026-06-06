import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const CakeCard = ({ cake }) => {
  const {
    _id,
    name,
    slug,
    category,
    flavor,
    occasion,
    price,
    currency,
    rating,
    reviewCount,
    badge,
    featured,
    stock,
    description,
    image,
  } = cake;
  return (
    <Link href="#" className="space-y-2">
      <div
        key={_id}
        className="relative rounded-lg overflow-hidden w-full shadow-md bg-surface transition-all group hover:-translate-y-2 flex flex-col justify-between"
      >
        <section>
          <img
            className="w-full object-cover transition-transform group-hover:scale-105 duration-300"
            src={image}
          />
          {badge && (
            <div className="bg-[#fcf9f8e6] text-primary font-semibold text-sm flex items-center absolute top-3 right-3 px-2 py-1 gap-2 rounded-md">
              <span>{badge}</span>
            </div>
          )}

          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">{name}</h1>
              <h1 className="text-xl font-bold text-primary">${price}</h1>
            </div>
            <p className="text-sm text-on-surface-variant line-clamp-2">
              {description}
            </p>
          </div>
        </section>
        {/* price section  */}
        <div className=" flex justify-between items-center px-4 pb-4">
            <div className="flex items-center gap-1">
                <span>
            <FaStar size={15} className="text-yellow-500" />
          </span>
          <span>{rating}</span> <span>({reviewCount})</span>
            </div>
          
          <button className="group/cart border-2 border-primary hover:text-white rounded-lg hover:bg-primary cursor-pointer transition-all duration-500">
            <MdOutlineAddShoppingCart
              className="m-2 text-2xl text-primary group-hover/cart:text-white"
              // size={25}
            />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CakeCard;
