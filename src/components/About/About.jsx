import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.ptag}>
        <p>We strive to</p>
        <p className={style.color}>Exceed your goal</p>
      </div>
      <div className={style.photo}>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65dee6dd16ba19f9b206aeb5_About%20Hero%20Image-p-1600.webp" />
      </div>
      <div>
        <div className={style.value}>
          <span>Our</span>
          <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg" />
          <p>Values</p>
        </div>
        <div className={style.parts}>
          <div>
            <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65def47137a3de033c8dbe46_Values%20Icon%2001.webp" />
            <h3>Innovate</h3>
            <p>
              In the bustling metropolis of tomorrow, skyscrapers intertwine
              with hanging gardens, creating a mesmerizing
            </p>
          </div>
          <div>
            <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65def471ce557d40bbc57fe5_Values%20Icon%2002.webp" />
            <h3>Communicate</h3>
            <p>
              In the bustling metropolis of tomorrow, skyscrapers intertwine
              with hanging gardens, creating a mesmerizing
            </p>
          </div>
          <div>
            <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65def47142b2729fc9e6a872_Values%20Icon%2003.webp" />
            <h3>Transparecy</h3>
            <p>
              In the bustling metropolis of tomorrow, skyscrapers intertwine
              with hanging gardens, creating a mesmerizing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
