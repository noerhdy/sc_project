import CardImage from "../CardImage";
import CardTitle from "./CardTitle";

const CardService = (props) => {
  const { imgUrl, text, name } = props;
  return (
    <div className="overflow-hidden  text-start group rounded-md ">
      <div className="flex flex-col relative max-w-screen-sm  ">
        <div className="w-full h-full bg-black opacity-40 group-hover:opacity-0 ease-in-out duration-500 absolute"></div>
        <div className="w-full h-full bg-gradient-to-t from-black to-60% absolute"></div>
        <CardImage
          imgUrl={imgUrl}
          classname="min-h-[490px] max-w-[340px] object-cover "
        />
        <div className="flex flex-col w-full absolute bottom-0 p-6">
          <CardTitle titleName={name} titleText={text} />
        </div>
      </div>
    </div>
  );
};

export default CardService;
