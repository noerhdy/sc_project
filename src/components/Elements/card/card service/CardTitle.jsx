import CtaIndex from "../../Button/CtaIndex";
const CardTitle = (props) => {
  const { titleName, titleText } = props;
  return (
    <>
      <div className="flex flex-col  md:space-y-4 overflow-hidden group my-2 ">
        <h2 className="font-semibold antialiased  md:text-4xl text-lg text-zinc-50 md:translate-y-10 group-hover:translate-y-0 ease-linear delay-75 duration-300">
          {titleName}
        </h2>
        <p className=" antialiased md:text-xl text-xs text-zinc-200 text-balance  md:translate-y-10 group-hover:translate-y-0 ease-linear duration-300 delay-75">
          {titleText}
        </p>
      </div>
      <div className="flex justify-start z-10 w-full 0">
        <CtaIndex>See More</CtaIndex>
      </div>
    </>
  );
};

export default CardTitle;
