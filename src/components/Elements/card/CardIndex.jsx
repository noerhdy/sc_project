import CardImage from "./CardImage";
import CardTitle from "./CardTitle";

const CardIndex = (props) => {
  const { imgUrl, text, name } = props;
  return (
    <div className="overflow-hidden text-start flex-col rounded-md ">
      <div className="flex flex-col relative w-[30vw] h-[70vh] ">
        <div className="w-full h-full bg-black opacity-0 absolute"></div>
        <CardImage imgUrl={imgUrl} classname="h-full w-full object-cover " />
        <div className="flex flex-col w-full absolute bottom-0 p-6">
          <CardTitle titleName={name} titleText={text} />
        </div>
      </div>
    </div>
  );
};

export default CardIndex;
