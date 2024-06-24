import React from "react";
import CtaIndex from "../../Button/CtaIndex";

const CardProduct = () => {
  return (
    <div className="rounded-xl w-[500px] h-auto md:h-[250px] flex flex-col md:flex-row overflow-hidden gap-2 bg-zinc-500">
      <div className="relative w-full md:w-1/2 h-48 md:h-full">
        <div className="w-full  h-full bg-black opacity-40 group-hover:opacity-0 ease-in-out duration-500 absolute"></div>
        <img
          className="object-cover h-full w-full md:w-auto bg-center"
          src="img/1.jpg"
          alt="Product"
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2 p-4 space-y-2">
        <p>2024 | name product</p>
        <h2 className="text-lg">Name Product</h2>
        <p>Descripton product</p>
        <p className="italic text-lg">Price</p>
        <div className="w-1/2">
          <CtaIndex>Details</CtaIndex>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
