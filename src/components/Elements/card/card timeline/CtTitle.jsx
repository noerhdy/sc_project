import React from "react";

const CtTitle = (props) => {
  const { titleName, titleText } = props;
  return (
    <>
      <div className="flex flex-col p-2   ">
        <h2 className="font-semibold antialiased text-xl ">{titleName}</h2>
        <p className=" antialiased text-xs text-zinc-900 ">{titleText}</p>
      </div>
    </>
  );
};

export default CtTitle;
