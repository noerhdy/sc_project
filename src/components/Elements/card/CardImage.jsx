const CardImage = (props) => {
  const {
    imgUrl,
    classname = "object-cover bg-center duration-500 ease-in-out",
  } = props;
  return <img className={` ${classname}  `} src={imgUrl}></img>;
};

export default CardImage;
