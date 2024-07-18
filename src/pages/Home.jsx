import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Main/Intro/Intro";
import Info from "../components/Main/Info/Info";
import Customer from "../components/Main/Customer/Customer";
import News from "../components/Main/News/News";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ/Faq";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Info />
      <Customer />
      <News />
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Home;
