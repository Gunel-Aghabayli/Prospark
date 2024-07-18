import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import PricePage from "./pages/PricePage";
import ServisePage from "./pages/ServisePage";
import Itemscom from "./components/Itemscom/Itemscom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/service" element={<ServisePage />} />
          <Route path="/service/items" element={<Itemscom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
