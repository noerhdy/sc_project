import React from "react";
import {
  CarouselSection,
  NavSection,
  ServiceSection,
  TabIndex,
} from "../Fragment";

export const MainLayout = () => {
  return (
    <>
      <NavSection />
      <CarouselSection />
      <TabIndex />
      <ServiceSection />
    </>
  );
};

export default MainLayout;
