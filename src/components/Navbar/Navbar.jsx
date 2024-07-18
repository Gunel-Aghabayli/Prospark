import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.links}>
      <div className={style.image}>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d9eea831d71fae16b25713_Prospark%20Logo.webp" />
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About </NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/price">Price</NavLink>
        </li>
      </ul>
      <div className={style.buton}>
        <i class="fa-solid fa-cart-shopping"></i>
        <button>GET IN TOUCH</button>
      </div>
    </div>
  );
};

export default Navbar;
