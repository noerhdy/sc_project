import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CtaIndex = ({ children }) => {
  return (
    <Button className=" group/button rounded-full md:px-6 px-2 group overflow-hidden">
      <div className="flex items-center justify-center gap-1">
        <span className="md:text-lg font-normal translate-x-2  group-hover/button:translate-x-0 duration-300 ease-in-out">
          {children}
        </span>
        <ChevronRight
          className="group-hover/button:opacity-100 opacity-0 group-hover/button:translate-x-2 duration-300 ease-in-out"
          size={12}
        />
      </div>
    </Button>
  );
};

export default CtaIndex;
