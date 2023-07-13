import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CardComponent from "./components/CardComponent";
import InputComponent from "./components/InputComponent";
import { useSelector } from "react-redux";
import Listcomponent from "./components/ListComponent";
import LoginPage from "./pages/LoginPage";
import image from "../src/images/DSC_2427.JPG";
import CheckboxComponent from "./components/CheckboxComponent";
import ButtonComponent from "./components/ButtonComponent";
import RegisterPage from "./pages/RegisterPage";
import arrow from "../src/images/arrow.svg";

function App() {
  const isDarkTheme = useSelector(
    (bigpie) => bigpie.darkThemeSlice.isDarkTheme
  );
  return (
    <div className={isDarkTheme}>
      <div className="bg-lightmode-bg dark:bg-darkmode-bg text-lightmode-text dark:text-darkmode-text">
        <header>
          <Navbar></Navbar>
        </header>

        <main className="main flex flex-col ">
          <RegisterPage></RegisterPage>
        </main>
      </div>
    </div>
  );
}

export default App;
