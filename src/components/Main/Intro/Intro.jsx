import React from "react";
import style from "./Intro.module.css";

const Intro = () => {
  return (
    <main>
      <div className={style.image}>
        <div className={style.content}>
          <button>GROW YOUR BRAND</button>
          <p>Drive More With</p>
          <p className={style.ptag}>Digital Marketing</p>
          <div className={style.div}>
            Our Agency Drives Results, and Fuels Success in the Dynamic
            Landscape of Online Marketing. Let's Transform Your Vision.
          </div>
          <button className={style.buton}>Get in touch</button>
        </div>
      </div>
      <div className={style.star}>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed82dff132f0810378e0_Union.svg" />
        <p>Our Agency Drives Results, and Fuels Success in the Dynamic.</p>
      </div>
      <div className={style.spark}>
        <p>We Are</p>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg" />
        <span>Spark</span>
        <p className={style.ptag}>
          We understand the importance of digital marketing and are dedicated to
          helping businesses achieve their online goals. Here are just a few
          reasons why you should choose us for your digital marketing needs.
        </p>
        <img className={style.photo} src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5f170c1f3f04f7487e3b5_We%20Are%20Video%20Image-p-1080.webp"/>
      </div>
    </main>
  );
};

export default Intro;

