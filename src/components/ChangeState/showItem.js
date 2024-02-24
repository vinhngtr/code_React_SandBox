import bird from "../../images/animal/bird.svg";
import cat from "../../images/animal/cat.svg";
import heart from "../../images/animal/heart.svg";
import cow from "../../images/animal/cow.svg";
import dog from "../../images/animal/dog.svg";
import gator from "../../images/animal/gator.svg";
import horse from "../../images/animal/horse.svg";
import { useState } from "react";
import "./item.css";

const AnimalSVG = {
  bird: bird,
  cat: cat,
  cow: cow,
  dog: dog,
  gator: gator,
  horse: horse,
};
export function AnimalShow(props) {
  const { type } = props;
  const [click, setClick] = useState(0);
  const handle = () => {
    setClick(click + 1);
  };
  return (
    <div className="animal-show">
      <img
        className="animal"
        onClick={handle}
        src={AnimalSVG[type]}
        alt="Animal"
        style={{
          cursor: "pointer",
        }}
      />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ width: 30 + 10 * click + "px" }}
        title="Yêu thích"
      />
    </div>
  );
}
