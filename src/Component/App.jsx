import React, { useEffect, useState } from "react";
import Accordion from "./Accordion/Accordion";
import "./App.css";
import Best from "./Best/Best";
import Cinama from "./Cinama/Cinama";
import Comment from "./Comment/Comment";
import Device from "./Device/Device";
import Doll from "./Doll/Doll";
import End from "./Footer/End";
import Footer from "./Footer/Footer";
import Freecontent from "./Freecontent/Freecontent";
import How from "./How/How";
import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";
export const MyContext = React.createContext();

function App() {
  let [menu, setMenu] = useState(null);
  let [slider, setslider] = useState(null);
  let [best, setbest] = useState(null);
  let [free, setfree] = useState(null);
  let [cinama, setcinama] = useState(null);
  let [accordion, setaccordion] = useState(null);

  const fetchMenu = async () => {
    try {
      let data = await fetch("http://localhost:1000/menu");
      let res = await data.json();
      setMenu(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchSlider = async () => {
    try {
      let data = await fetch("http://localhost:1000/slider");
      let res = await data.json();
      setslider(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchBest = async () => {
    try {
      let data = await fetch("http://localhost:1000/best");
      let res = await data.json();
      setbest(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchfree = async () => {
    try {
      let data = await fetch("http://localhost:1000/free");
      let res = await data.json();
      setfree(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchcinama = async () => {
    try {
      let data = await fetch("http://localhost:1000/cinama");
      let res = await data.json();
      setcinama(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchaccordion = async () => {
    try {
      let data = await fetch("http://localhost:1000/accardion");
      let res = await data.json();
      setaccordion(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMenu();
    fetchSlider();
    fetchBest();
    fetchfree();
    fetchcinama();
    fetchaccordion();
  }, []);

  return (
    <div className="flex justify-center flex-col w-[100%]">
      <MyContext.Provider
        value={{ menu, slider, best, free, cinama, accordion }}
      >
        <Menu />
        <Slider />
        <Best />
        <Device />
        <How />
        <Freecontent />
        <Doll />
        <Cinama />
        <Comment />
        <Accordion />
        <Footer />
        <End />
      </MyContext.Provider>
    </div>
  );
}

export default App;
