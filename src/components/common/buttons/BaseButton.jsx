import Link from "next/link";
import React from "react";

const BaseButton = ({ buttonName, variant, px, py }) => {
  const variants = {
    primary: "bg-primary text-white",
  };
  return (
    <div>
      <Link href={""}>
        <button className={`${variants[variant]}  rounded-md ` }>{buttonName}</button>
      </Link>
    </div>
  );
};

export default BaseButton;
