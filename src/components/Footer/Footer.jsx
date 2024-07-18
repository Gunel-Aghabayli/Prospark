import React from "react";
import style from "./Footer.module.css";
import ScrollToTopButton from "../ScrollButton/ScrollButton";

const Footer = () => {
  return (
    <div className={style.footer}>
    <ScrollToTopButton />
      <div className={style.part1}>
        <p>Let's Work</p>
        <div className={style.photo}>
          <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg" />
          <span>Together</span>
        </div>
      </div>
      <div className={style.part2}>
        <div className={style.section}>
          <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d9eea831d71fae16b25713_Prospark%20Logo.webp" />
          <h4>Newsletter</h4>
          <p>Sign up to receive latest news and exclusive content.</p>
          <div className={style.input}>
            <input placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div>
          <h4>Menu</h4>
          <p>Home V1</p>
          <p>Home V2</p>
          <p>About</p>
          <p>Blog</p>
          <p>Pricing</p>
          <p>Contact</p>
          <p>Career</p>
        </div>

        <div>
          <h4>Pages</h4>
          <p>Service</p>
          <p>Service single</p>
          <p>Project</p>
          <p>Blog single</p>
          <p>Pricing</p>
          <p>Project single</p>
          <p>Career single</p>

        </div>
        <div>
          <h4>Utility pages</h4>
          <p>Style guide</p>
          <p>Changelog</p>
          <p>License</p>
          <p>404 not found</p>
          <p>Protect password </p>
          <p>Project single</p>
          <p>Career single</p>
        </div>
      </div>
      <hr/>
      <div className={style.finish}>© Copyright 2024 | Design & Developed By Onixtheme - Licensing | Powered By Webflow</div>
    </div>
  );
};

export default Footer;
