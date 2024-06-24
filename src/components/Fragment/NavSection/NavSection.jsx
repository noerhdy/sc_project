import { CircleUserRound } from "lucide-react";
import React from "react";
import NavItem from "./NavItem";

const NavSection = () => {
  return (
    <div className="mx-auto flex max-w-screen-2xl items-center md:flex-row p-2 space-y-2 md:p-6 ">
      <div className="items-start md:px-16 px-4 ">
        <h1 className="font-medium text-2xl italic">LoremIpsum</h1>
      </div>
      <div className="flex w-3/6 justify-end">
        <NavItem />
        {/* <div className="px-16 pl-24 flex justify-center items-center">
          <CircleUserRound />
        </div> */}
      </div>
    </div>
  );
};

export default NavSection;
