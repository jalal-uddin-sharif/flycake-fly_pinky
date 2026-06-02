import Filter from "@/components/menu/Filter";
import Container from "@/components/ui/Container";
import React from "react";

const menu = () => {
  return (
    <div className="bg-[#fcf9f8]">
      <Container>
        <div className="py-10">
          <h1 className="text-heading">Our Cake Collection</h1>
          <p className="text-on-surface-variant">
            Handcrafted delights for every celebration.
          </p>
        </div>
        <div className="grid grid-cols-12 ">
          <Filter/>

          <section></section>
        </div>
      </Container>
    </div>
  );
};

export default menu;
