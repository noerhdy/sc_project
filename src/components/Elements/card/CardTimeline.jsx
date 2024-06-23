import CardImage from "./CardImage";
import CardTitle from "./CardTitle";

const CardTimeline = (props) => {
  const { imgUrl, text, name } = props;
  return (
    <div className="group md:w-[45%] h-full  min-w-100 space-y-4 text-start flex-col bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 hover:dark:bg-zinc-800 p-4 mx-2 my-2   rounded-md overflow-hidden dark:text-slate-50 drop-shadow">
      <CardImage imgUrl={imgUrl} />
      <div className="flex flex-row justify-between text-balance">
        <CardTitle titleName={name} titleText={text} />
      </div>
    </div>
  );
};

export default CardTimeline;
