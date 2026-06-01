import LeftSidebar from "@/components/menu/LeftSidebar";
import Container from "@/components/ui/Container";
import React from "react";

const menu = () => {
  return (
    <div>
      <Container>
        <div className="my-10">
          <h1 className="text-heading">Our Cake Collection</h1>
          <p className="text-on-surface-variant">
            Handcrafted delights for every celebration.
          </p>
        </div>
        <div className="grid grid-cols-12 ">
          <LeftSidebar/>

          <section></section>
        </div>
      </Container>
    </div>
  );
};

export default menu;
