import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CardComponent from "./components/CardComponent";
import InputComponent from "./components/InputComponent";
import { useSelector } from "react-redux";
import Listcomponent from "./components/ListComponent";
import LoginPage from "./pages/LoginPage";
import CheckboxComponent from "./components/CheckboxComponent";
import ButtonComponent from "./components/ButtonComponent";
import RegisterPage from "./pages/RegisterPage";
import arrow from "../src/images/arrow.svg";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import TakeAway from "./pages/TakeAwayPage";
import NoCardsPartial from "./components/NoCardPartial";
import ItemInfo from "./pages/ItemInfo";
import Router from "./routes/router";
import Popup from "./components/Popup";

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
        <main>
          <Router></Router>
          {/* <NoCardsPartial></NoCardsPartial> */}
          {/* <ItemInfo></ItemInfo> */}
          {/* <TakeAway></TakeAway> */}
          {/* <HomePage></HomePage> */}
          {/* <RegisterPage></RegisterPage> */}
          {/* <LoginPage></LoginPage> */}
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
