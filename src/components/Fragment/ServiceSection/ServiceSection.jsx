import CtaIndex from "@/components/Elements/Button/CtaIndex";
import CardService from "@/components/Elements/card/card service/CardService";
import React from "react";

const ServiceSection = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="max-w-screen-xl flex flex-col gap-6 px-6">
          <div className="w-auto rounded-xl flex overflow-hidden flex-wrap justify-center items-center md:gap-24 gap-0 bg-zinc-500">
            <div className="relative">
              <div className="w-full h-full bg-black opacity-40 group-hover:opacity-0 ease-in-out duration-500 absolute"></div>
              <img
                className="object-cover w-[700px] h-[320px] bg-center"
                src="img/1.jpg"
              ></img>
            </div>

            <div className="flex-1 text-white">
              <div className="flex flex-col justify-center p-4  space-y-4">
                <h2 className="text-xl">HAHAHHAHAHHAHA</h2>
                <p>Click the button to read.</p>
                <div className="card-actions my-4 ">
                  <CtaIndex />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-12 ">
            <CardService
              name="Hello"
              imgUrl="./img/4.jpg"
              text="loremlorem lorem lorenm"
            />
            <CardService
              name="Hello"
              imgUrl="./img/4.jpg"
              text="loremlorem lorem lorenm"
            />
            <CardService
              name="Hello"
              imgUrl="./img/4.jpg"
              text="loremlorem lorem lorenm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
