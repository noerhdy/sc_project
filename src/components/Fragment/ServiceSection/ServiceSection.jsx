import CtaIndex from "@/components/Elements/Button/CtaIndex";
import CardService from "@/components/Elements/card/card service/CardService";
import React from "react";

const ServiceSection = () => {
  return (
    <>
      <section className="flex flex-col gap-6 my-18 mx-12">
        <div className=" rounded-xl md:w-full flex md:flex-row overflow-hidden flex-wrap ">
          <div className="relative w-full md:w-1/2 h-48 md:h-60">
            <img
              className="object-cover h-full w-full md:w-[600px] bg-center"
              src="img/1.jpg"
            ></img>
          </div>

          <div className=" bg-orange-600  w-full md:w-1/2  justify-center items-start md:p-0 p-4 md:items-center flex flex-col ">
            <h2 className="text-xl">Lorem ipsum, dolor sit amet</h2>
            <p>Click the button to read.</p>
            <div className="card-actions my-4 ">
              <CtaIndex>Learn More</CtaIndex>
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
      </section>
    </>
  );
};

export default ServiceSection;
