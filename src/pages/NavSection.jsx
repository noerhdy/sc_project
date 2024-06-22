import NavMenu from "@/components/Fragment/NavMenu/NavMenu";
import { CircleUserRound } from "lucide-react";
import React from "react";

const NavSection = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-8 ">
      <div className="items-start px-16">
        <h1 className="font-medium text-2xl italic">LoremIpsum</h1>
      </div>
      <div className="flex">
        <NavMenu />
        <div className="px-16 pl-24 flex justify-center items-center">
          <CircleUserRound />
        </div>
      </div>
    </div>
  );
};

export default NavSection;
