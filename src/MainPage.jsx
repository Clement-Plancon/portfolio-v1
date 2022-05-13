import React, { Fragment } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Degree from "./pages/Degree";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";

const MainPage = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <Skills />
      <Degree />
      <Portfolio />
      <Contact />
    </Fragment>
  );
};

export default MainPage;
