import React from "react";
import style from "./Info.module.css";
const Info = () => {
  return (
    <div>
      <div className={style.spark}>
        <p>Our Clever</p>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg" />
        <span>Approach</span>
      </div>
      <div className={style.sections}>
        <div className={style.section}>
          <h1>01</h1>
          <div>
            <h2>Ads Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className={style.section}>
          <h1>02</h1>
          <div>
            <h2>Data Analytics</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className={style.section}>
          <h1>03</h1>
          <div>
            <h2>SEO Marketing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className={style.section}>
          <h1>04</h1>
          <div>
            <h2>Email Marketing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className={style.section}>
          <h1>05</h1>
          <div>
            <h2>Content Marketing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <button>Get in touch</button>
      </div>
    </div>
  );
};

export default Info;
