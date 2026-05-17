import Link from "next/link";
import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

const Footer = () => {
  const links = [
    {
      title: "About Us",
      path: "#",
    },
    {
      title: "Delivery Info",
      path: "#",
    },
    {
      title: "FAQ",
      path: "#",
    },
  ];
  const legal = [
    {
      title: "Terms & Conditions",
      path: "#",
    },
    {
      title: "Privacy Policy",
      path: "#",
    },
    {
      title: "Contact Us",
      path: "#",
    },
  ];
  return (
    <div className="bg-surface-container ">
      <div className="py-10 border-t border-b border-primary">
        <section className="width grid grid-cols-3 justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-h3 text-primary">FlyCake</h1>
            <p className="text-on-surface-variant">
              Bringing joy and sweetness to your special occasions. Handcrafted
              cakes delivered with care across the city.
            </p>
            <div className="space-x-3">
              <button className="text-primary">
                <AiOutlineGlobal size={20} />
              </button>
              <button className="text-primary">
                <IoShareSocialSharp size={20} />
              </button>
              <button className="text-primary">
                <FaQuestion size={20} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 flex flex-col">
              <h1 className="text-sm text-neutral font-semibold">Links</h1>

              {links?.map((link) => (
                <Link
                  className="text-on-surface-variant hover:text-primary"
                  key={link.title}
                  href={link.path}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="space-y-2 flex flex-col">
              <h1 className="text-sm text-neutral font-semibold">Legal</h1>

              {legal?.map((link) => (
                <Link
                  className="text-on-surface-variant hover:text-primary"
                  key={link.title}
                  href={link.path}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="space-y-3">
              <h1 className="text-sm text-neutral font-semibold">
                Join Our NewsLetter
              </h1>
              <p className="text-on-surface-variant">
                Get 10% off your first order!
              </p>
              <div>
                <form action="" className="flex gap-2 flex-1">
                  <input
                    className="border border-primary py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-surface"
                    type="text"
                    placeholder="Email Address"
                  />
                  <button className="bg-primary text-white px-4 py-1 rounded-lg cursor-pointer text-label-bold">
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center my-3">
        <h1 className="text-on-surface-variant font-medium">
          © 2026 FlyCake. Handcrafted with love.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
