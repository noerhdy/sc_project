import React from "react";
import CardTimeline from "../card/CardTimeline";

const Timeline = () => {
  return (
    <>
      <div className="flex w-full justify-center  mx-auto bg-green-500 ">
        <div className="flex gap-6 w-full max-w-screen-lg bg-blue-500 p-12">
          <CardTimeline
            name="Hello"
            imgUrl="./img/2.jpg"
            text="loremlorem lorem lorenm"
          />
          <CardTimeline
            name="Hello"
            imgUrl="./img/2.jpg"
            text="loremlorem lorem lorenm"
          />
          <CardTimeline
            name="Hello"
            imgUrl="./img/2.jpg"
            text="loremlorem lorem lorenm"
          />
        </div>
      </div>
      <div className="flex w-full bg-yellow-500 justify-center  mx-auto p-12 ">
        <div className="flex flex-col w-full max-w-screen-lg bg-blue-500 p-12">
          <span className=" border border-gray-950"></span>
        </div>
      </div>
    </>
  );
};

export default Timeline;
