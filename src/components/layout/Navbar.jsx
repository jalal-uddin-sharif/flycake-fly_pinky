"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Menu",
      path: "/menu",
    },
    {
      name: "My Orders",
      path: "/my-orders",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  return (
    <section className="bg-surface sticky top-0 z-50 shadow-md">
      <div className="width py-4 flex justify-between">
        {/* logo */}
        <div>
          {/* <h1 className="text-primary font-bold text-2xl">FlyCake</h1> */}
          <img
            src="/images/flycake-logo.png"
            className="w-[100px] h-[30px]"
            alt=""
          />
        </div>
        {/* navitem */}
        <div className="space-x-6 text-on-surface-variant flex justify-center items-center">
          {navItems?.map((item) => {
            const isActive = pathName == item.path;
            return (
              <Link key={item.name} href={item.path}>
                <p
                  className={`transition-all duration-300 ease-in-out font-medium text-label-bold hover:text-primary ${isActive && "text-primary-container border-b-2 border-primary font-semibold"}`}
                >
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
        {/* cart */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <MdOutlineAddShoppingCart
              className="text-on-surface-variant cursor-pointer hover:scale-105 text-3xl"
              // size={25}
            />
            <div className="absolute w-5 h-5 flex items-center justify-center bg-primary-container rounded-full -top-4 -right-2">
              <p className="text-white text-[10px]">12</p>
            </div>
          </div>
          <button className="bg-primary px-6 py-2 rounded-lg text-label-bold text-white hover:scale-103 hover:brightness-110 transition-all duration-300 cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
