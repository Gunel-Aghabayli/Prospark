import React from "react";
import style from "./Blog.module.css";
const Blog = () => {
  return (
    <div>
      <div className={style.ptag}>
        <p>Our Clever</p>
        <p className={style.color}>Approuch</p>
        <img src="https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d830c0c478f2236b3436ae_Blog%20Single%20Img%2001-p-1600.webp" />
      </div>
      <div className={style.photos}>
        <div className={style.photo}>
          <img src="https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d834314dac02e4e82bd7a7_Blog%20Img%2006-p-800.webp" />
          <h2>How cold email can scale a business</h2>
        </div>
        <div  className={style.photo}>
          <img src="https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d833ab8687b41b7640cde0_Blog%20Img%2002-p-800.webp" />
          <h2>Is running social media ads still profitable?</h2>
        </div>
        <div  className={style.photo}>
          <img src="https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d833ecddf80d9cd8b2ffbc_Blog%20Img%2004-p-800.webp" />
          <h2>Get more engaging social media post ideas</h2>
        </div>
        <div  className={style.photo}>
          <img src="https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d830849a80251957dbdcb4_Blog%20Img%2001.webp" />
          <h2>The Role of Marketing Team in Driving Business Growth</h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
