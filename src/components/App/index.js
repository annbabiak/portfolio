import React from "react";
import "./style.css";
import Header from "../Header";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Contacts from "../Contacts";
import Footer from "../Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contacts></Contacts>
      <Footer></Footer>
    </>
  );
}

export default App;
