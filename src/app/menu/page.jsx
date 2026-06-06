import Filter from "@/components/menu/Filter";
import Items from "@/components/menu/Items";
import Container from "@/components/ui/Container";
import React from "react";

const menu = () => {
  return (
    <div className="bg-[#fcf9f8] py-10">
      <Container>
        <div className="pb-10">
          <h1 className="text-heading">Our Cake Collection</h1>
          <p className="text-on-surface-variant">
            Handcrafted delights for every celebration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-11 gap-8">
          <section className="col-span-1 md:col-span-3 w-full">
            <Filter />
          </section>

          <section className="col-span-1 md:col-span-8">
            <Items/>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default menu;
