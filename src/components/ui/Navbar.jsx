"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Navbar = () => {
  const user = useAuth()
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

  const [mobileScreen, setMobileScreen] = useState(false);
  return (
    <section className="relative bg-surface sticky top-0 z-50 shadow-md">
      <div className="width py-4 flex justify-between">
        {/* logo */}
        <div className="flex items-center gap-1">
          <div className=" blcok md:hidden">
            <GiHamburgerMenu
              onClick={() => setMobileScreen(!mobileScreen)}
              className="cursor-pointer"
            />
            {mobileScreen && (
              <div className={`absolute flex flex-col bg-white shadow-md p-4 space-y-4 my-4
      transition-all duration-300 ease-in 
      `}>
                {navItems?.map((item) => {
                  const isActive = pathName == item.path;
                  return (
                    <Link key={item.name} href={item.path}>
                      <p
                        className={`transition-all w-fit duration-300 ease-in-out font-medium text-label-bold hover:text-primary ${isActive && "text-primary-container border-b-2 border-primary font-semibold"}`}
                      >
                        {item.name}
                      </p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          {/* <h1 className="text-primary font-bold text-2xl">FlyCake</h1> */}
          <img
            src="/images/flycake-logo.png"
            className="w-[100px] h-[30px]"
            alt=""
          />
        </div>
        {/* navitem */}
        <div className="hidden lg:block">
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
          {user ? (
            <div>
              <CgProfile className="text-3xl text-on-surface-variant cursor-pointer" />
            </div>
          ) : (
            <Link href="/signup">
            <button className="bg-primary px-6 py-2 rounded-lg text-label-bold text-white hover:scale-103 hover:brightness-110 transition-all duration-300 cursor-pointer">
              Login
            </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
