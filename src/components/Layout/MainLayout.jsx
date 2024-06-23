import React from "react";
import {
  CarouselSection,
  NavSection,
  ServiceSection,
  TabIndex,
} from "../Fragment";
import TimelineDemo from "../Elements/Timeline/TimelineDemo";

export const MainLayout = () => {
  return (
    <>
      <NavSection />
      <CarouselSection />
      <TabIndex />
      <ServiceSection />
      {/* <TimelineDemo /> */}
    </>
  );
};

export default MainLayout;
