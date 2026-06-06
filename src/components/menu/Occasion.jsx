import React from "react";

const Occasion = () => {
  return (
    <div>
      <h2 className="my-4 text-lg">Occasion</h2>
      <div className="flex flex-wrap gap-1 text-base">
        <span className="px-4 py-1 cursor-pointer bg-primary rounded-full text-white font-medium">Birthday</span>
        <span className="border  rounded-full cursor-pointer transition-all duration-200 border-outline-variant hover:border-primary px-4 py-1 ">Wedding</span>
        <span className="border  rounded-full cursor-pointer transition-all duration-200 border-outline-variant hover:border-primary px-4 py-1 ">Anniversary</span>
       
      </div>
    </div>
  );
};

export default Occasion;
