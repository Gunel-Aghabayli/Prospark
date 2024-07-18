import React from "react";
import style from "./News.module.css";
import Marquee from "react-fast-marquee";


const News = () => {
  return (
    <div className={style.total}>
      <img
        className={style.photo}
        src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/6628f28c9325533700acced4_Icon%2002.webp"
      />
      <div className={style.spark}>
        <span>100</span>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg" />
        <span className={style.span2}>Projects</span>
      </div>
      <div className={style.view}>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/6628f29736662e129bcd0904_Icon%2003.webp" />
        <button>View Projects</button>
        <img
          className={style.img2}
          src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/6628f298fb86ff2c1e3fbf6c_Icon%2004.webp"
        />
      </div>
      <div className={style.spark2}>
        <p>What Our</p>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg" />
        <span>Clients Say</span>
      </div>
      <div className={style.ceo}>
        <div className={style.photo2}>
          <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d744f3473c9f3f197a3788_Testimonial%20V1%20Author%20Img.webp" />
          <h3>Allison George</h3>
          <p>CEO, Company</p>
        </div>
        <div className={style.content}>
          <h2>Changed my business</h2>
          <p>
            We've been working with Prospark for over a year now and we're very
            happy with the results. They've helped us increase our website
            traffic by over 300% and our leads by over 200%. We highly recommend
            them to any business looking to grow their online presence.
          </p>
        </div>
      </div>
      <div className={style.spark2}>
      <p>Trusted</p>
      <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg" />
      <span>Clients</span>
    </div>
    <Marquee>
    <div className={style.images}>
    <img
      className={style.img}
      src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d778b9964a85eb0bb27252_Sponsor%20Ticker%20Img%2003.svg"
    />
    <img
      className={style.img}
      src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d778b9b9c74277592f3d51_Sponsor%20Ticker%20Img%2007.svg"
    />
    <img
      className={style.img}
      src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d778b990f6f85e3dbbf6c1_Sponsor%20Ticker%20Img%2006.svg"
    />
    <img
      className={style.img}
      src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d778b9b9c74277592f3d51_Sponsor%20Ticker%20Img%2007.svg"
    />
    <img
    className={style.img}
    src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d778b875f406183f3273ec_Sponsor%20Ticker%20Img%2009.svg"
  />
  </div>
  </Marquee>

    </div>
  );
};

export default News;
