import React from "react";
import BaseButton from "../common/buttons/BaseButton";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFF0F5] to-white overflow-hidden py-12">
      <div className="width flex justify-between">
        {/* hero content */}
        <section className="flex flex-col justify-center">
          <header className="text-h1 font-semibold">
            <h1>Delicious Cakes,</h1>
            <h1>
              <span className="text-primary">Delivered</span> to Your Door
            </h1>
          </header>
          <p className="my-6 text-lg max-w-125">
            Experience handcrafted sweetness made with premium ingredients and a
            dash of love. From birthdays to weddings, we make every moment
            special.
          </p>
          <div>
            <Link className="hover:brightness-105" href={""}>
              <button className="bg-primary text-white px-12 py-4 text-h3 rounded-md transition-all duration-500 hover:scale-103 cursor-pointer">
                Shop Now
              </button>
            </Link>
          </div>
        </section>

        {/* hero image */}
        <section>
          <div>
            <img
              className="max-w-[500px] hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALmxZgq_7UzWTrCrJpxNOdOhI7ggpr4wonAv2mKakyuHtpuCvmaCsPgvzA07WD3B7exX69DOPIuK4IWRG2htKjrngOMw5MN5wGELNJGeb3PPf07Ei152i4z28ObMdwV_ED-gdQqpyCAwLpm26dt1Otp9onSTL18Yb2sqHS2lGQtrQJEqqh_E0Blm5rpXzMDSWcNWdxuyLec127OhgpHR6iEJxxaiufkt2kiSmsHfStoKsa1S6XgVts7JzXSD2OevL4LPlwVacyMFw"
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
