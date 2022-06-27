import React, { useEffect } from "react";
import Parallax from "../components/Parallax/Parallax";
import Products from "../components/Products/Products";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <main>
      <Parallax />
      <Products />
    </main>
  );
};

export default Home;
