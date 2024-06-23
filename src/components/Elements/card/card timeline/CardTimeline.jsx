import CardImage from "../CardImage";
import CtTitle from "./CtTitle";

const CardTimeline = (props) => {
  const { imgUrl, text, name } = props;
  return (
    <div className="group w-[50%] h-fit  p-1 text-start flex-col bg-zinc-100 hover:bg-zinc-200  rounded-lg drop-shadow">
      <CardImage imgUrl={imgUrl} classname="rounded-lg" />
      <div className="flex flex-row justify-between ">
        <CtTitle titleName={name} titleText={text} />
      </div>
    </div>
  );
};

export default CardTimeline;
