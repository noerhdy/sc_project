import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CtaIndex = () => {
  return (
    <Button className=" group rounded-full px-6 group overflow-hidden">
      <div className="flex  items-center justify-center gap-1">
        <span className="text-lg font-normal translate-x-2  group-hover:translate-x-0 duration-300 ease-in-out">
          lets talk
        </span>
        <ChevronRight
          className="  group-hover:opacity-100 opacity-0 group-hover:translate-x-2 duration-300 ease-in-out"
          size={12}
        />
      </div>
    </Button>
  );
};

export default CtaIndex;
