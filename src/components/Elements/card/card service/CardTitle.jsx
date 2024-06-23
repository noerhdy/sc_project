import CtaIndex from "../../Button/CtaIndex";
const CardTitle = (props) => {
  const { titleName, titleText } = props;
  return (
    <>
      <div className="flex flex-col space-y-4  overflow-hidden group my-2 ">
        <h2 className="font-semibold antialiased  text-4xl text-zinc-50 translate-y-10 group-hover:translate-y-0 ease-linear delay-75 duration-300">
          {titleName}
        </h2>
        <p className=" antialiased text-xl text-zinc-200 text-balance  translate-y-10 group-hover:translate-y-0 ease-linear duration-300 delay-75">
          {titleText}
        </p>
      </div>
      <div className="flex justify-start z-10 w-full 0">
        <CtaIndex />
      </div>
    </>
  );
};

export default CardTitle;
