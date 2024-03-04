import CardStyle from "./Card.module.css";
import Button from "../button/Button";

const Card = ({ lang, img, btn }) => {
  return (
    <div>
      <h1 className={CardStyle.title}>{lang}</h1>
      <img className={CardStyle.images} src={img} alt="" />
      <Button btn={btn} />
    </div>
  );
};

export default Card;
