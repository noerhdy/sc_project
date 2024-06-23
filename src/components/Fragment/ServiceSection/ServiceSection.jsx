import React from "react";

const ServiceSection = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-auto max-w-screen-xl rounded-md flex overflow-hidden flex-wrap justify-around  gap-12 bg-zinc-600">
        <img
          className="object-cover w-[600px] h-[300px]  bg-center"
          src="img/2.jpg"
        ></img>
        <div className="card-text flex flex-col justify-center p-12 ">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
