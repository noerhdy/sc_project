import React from "react";
import {
  CarouselSection,
  NavSection,
  ServiceSection,
  TabIndex,
} from "../Fragment";
import Timeline from "../Elements/Timeline/Timeline";

export const MainLayout = () => {
  return (
    <>
      <NavSection />
      <CarouselSection />
      <TabIndex />
      <ServiceSection />
      <Timeline />
    </>
  );
};

export default MainLayout;
