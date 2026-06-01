import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineRestaurant } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";

const WhyChooseUs = () => {
  const datas = [
    {
      icon: TbTruckDelivery,
      title: "Fast Delivery",
      description: "We deliver fresh cakes to your doorstep in under 2 hours.",
    },
    {
      icon: MdOutlineRestaurant,
      title: "Premium Taste",
      description:
        "Only the finest ingredients for an unforgettable experience.",
    },
    {
      icon: MdDesignServices,
      title: "Custom Designs",
      description: "Your imagination, our creation. Personalized for you.",
    },
    {
      icon: PiCertificateBold,
      title: "Certified Quality",
      description: "Highest standards of hygiene and quality control.",
    },
  ];
  return (
    <div className="bg-surface-container-low">
      <section className="width py-10 ">
        <h1 className="text-heading text-center mb-10">Why CakeHut?</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-6">
          {datas?.map((data, idx) => {
            const Icon = data.icon;
            const {title, description} = data;
            return (
              <div
                key={idx}
                className="bg-surface p-6 space-y-3 flex flex-col items-center text-center justify-center rounded-lg shadow-md"
              >
                <div className="bg-pink-200 w-16 h-16 rounded-full p-2 flex justify-center items-center">
                  <Icon className="text-primary" size={30} />
                </div>
                <h1 className="text-h3">{title}</h1>
                <p className="text-sm text-on-surface-variant">
                 {description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
