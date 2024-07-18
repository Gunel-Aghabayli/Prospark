import React from "react";
import style from "./Customer.module.css";
const Customer = () => {
  return (
    <div>
      <div className={style.spark}>
        <p>Grow Using</p>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg" />
        <span>Our Strategy</span>
      </div>
      <div className={style.total}>
        <div className={style.customer}>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d71112277d9393554d8e86_Strategy%20Icon%2001.svg"/>
        <p>Client Onboarding and Strategy Development</p>
        <li>Initial meeting to understand client goals, target audience, and brand identity.</li>
        <li>Conduct a thorough analysis of the client's current online presence.</li>
         </div>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d70f12851e3840dfa72389_Strategy%20Image%2001-p-500.webp"/>
       
      <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d70f12bb53a5b87f34f533_Strategy%20Image%2002-p-500.webp"/>
      <div className={style.customer}>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d711112708e5116b953dba_Strategy%20Icon%2002.svg"/>
        <p>Campaign Planning and Execution</p>
        <li>Initial meeting to understand client goals, target audience, and brand identity.</li>
        <li>Conduct a thorough analysis of the client's current online presence.</li>
         </div>
         <div className={style.customer}>
         <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d711118aa426ac4af2a045_Strategy%20Icon%2003.svg"/>
         <p>Content Creation and Distribution</p>
         <li>Initial meeting to understand client goals, target audience, and brand identity.</li>
         <li>Conduct a thorough analysis of the client's current online presence.</li>
          </div>
         <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d70f1291140314a053b65d_Strategy%20Image%2003-p-500.webp"/>
      </div>
    </div>
  );
};

export default Customer;
