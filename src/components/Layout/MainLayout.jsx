import React from "react";
import {
  CarouselSection,
  NavSection,
  ServiceSection,
  TabIndex,
} from "../Fragment";
// import TimelineDemo from "../Elements/Timeline/TimelineDemo";

export const MainLayout = () => {
  return (
    <>
      <NavSection />
      <CarouselSection />
      <div className="flex justify-center ">
        <div className="max-w-screen-xl  overflow-hidden">
          <TabIndex />
          <ServiceSection />
        </div>
      </div>
      {/* <TimelineDemo /> */}
    </>
  );
};

export default MainLayout;
