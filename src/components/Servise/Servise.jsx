import React, { createContext, useContext } from "react";
import style from "./Servise.module.css";
import { Link } from "react-router-dom";

const TrainersContext = createContext();

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

const TrainersProvider = ({ children }) => {
  return (
    <TrainersContext.Provider value={TrainersInfo}>
      {children}
    </TrainersContext.Provider>
  );
};

const useTrainers = () => useContext(TrainersContext);

function ServisePage() {
  const trainers = useTrainers();

  return (
    <div>
    <div className={style.ptag}>
    <p>Our Clever</p>
    <p className={style.color}>Approuch</p>
    <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65df690168f8905269ba971b_Services%20Image-p-1600.webp"/>
  </div>
    <div className={style.trainer}>
      <div className={style.names}>
        {trainers.map((trainer) => (
          <div className={style.cube} key={trainer.id}>
            <Link to={`/service/items?item=${trainer.id}`}>
              <h3>{trainer.name}</h3>
            </Link>
            <p>{trainer.text}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
export default function TrainersWithProvider() {
  return (
    <TrainersProvider>
      <ServisePage />
    </TrainersProvider>
  );
}
