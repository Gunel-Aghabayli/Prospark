import React from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Itemscom.module.css";
const TrainersInfo = [
  {
    id: 1,
    src: "https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d5f67d2b6f6c5f8c5fc171_Service%20Single%20Img-p-1600.webp",
    name: "Add Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 2,
    src: "https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d5f67d2b6f6c5f8c5fc171_Service%20Single%20Img-p-1600.webp",
    name: "Data Analytics",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 3,
    src: "https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d5f67d2b6f6c5f8c5fc171_Service%20Single%20Img-p-1600.webp",
    name: "SEO Marketing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 4,
    src: "https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d5f67d2b6f6c5f8c5fc171_Service%20Single%20Img-p-1600.webp",
    name: "Email Marketing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 5,
    src: "https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d5f67d2b6f6c5f8c5fc171_Service%20Single%20Img-p-1600.webp",
    name: "Content Marketing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 6,
    src: "https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d5f67d2b6f6c5f8c5fc171_Service%20Single%20Img-p-1600.webp",
    name: "Social Marketing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];
const Items = () => {
  let [searchParam, setSearchParam] = useSearchParams();
  const selectedItemID = searchParam.get("item");
  const newArr = TrainersInfo.filter((data) => data.id === +selectedItemID);
  console.log(newArr);
  return (
    <div className={style.image}>
      <h1>Professional and dedicated services.</h1>
      {newArr.map((item) => (
        <img src={item.src} />
      ))}
      <div className={style.items}>
        <div className={style.name}>{newArr.map((item) => item.name)}</div>
        <div className={style.id}>
          {" "}
          ID number:{newArr.map((item) => item.id)}
        </div>
        <div className={style.content}>
          <li>Approach</li>
          <li>Saves times</li>
          <li>Expert advice</li>
          <li>Inexpensive</li>

          {newArr.map((item) => item.text)}
        </div>
      </div>
    </div>
  );
};

export default Items;
