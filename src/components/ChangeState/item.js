import { useState } from "react";
import { ListSV } from "./data";
import { AnimalShow } from "./showItem";
import './item.css';

function getRandomAnimal() {
  const animal = ["cow", "bird", "cat", "dog", "gator", "horse"];
  let index = Math.trunc(Math.random() * animal.length);
  return animal[index];
}

export default function ButtonChange() {
  const [animal, setAnimal] = useState([]);
  const handle = () => {
    setAnimal([...animal, getRandomAnimal()]);
  };
  const renderAnimal = animal.map((curr, index) => {
    return <AnimalShow type={curr} key={index}></AnimalShow>;
  });

  return (
    <div>
      <button onClick={handle} className="button is-link is-outlined">
        Add State
      </button>
      <hr />
      <div className="listAnimal">{renderAnimal}</div>
    </div>
  );
}
export function ListUser() {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState(!state);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {/* <button onClick={mainFunction}></button> */}
        {state === true ? "Ẩn danh sách sinh viên" : "Hiện danh sách sinh viên"}
      </button>
      <div>
        {state && (
          <div>
            {ListSV.map((curr) => {
              return (
                <div key={curr.id}>
                  <div>Tên của bạn là: {curr.name}</div>
                  <div>Bạn học lớp: {curr.class}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
