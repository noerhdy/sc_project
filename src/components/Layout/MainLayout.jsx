import NavSection from "@/pages/NavSection";
import React from "react";
import CarouselSection from "../Fragment/CarouselSection";
import TabSection from "../Fragment/Tab/TabSection";
import TabIndex from "../Fragment/TabIndex";

export const MainLayout = () => {
  return (
    <>
      <NavSection />
      <CarouselSection />
      <TabIndex />
    </>
  );
};

export default MainLayout;
