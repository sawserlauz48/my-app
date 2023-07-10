import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CardComponent from "./components/CardComponent";
import InputComponent from "./components/InputComponent";
import { useSelector } from "react-redux";
import Listcomponent from "./components/ListComponent";
import LoginPage from "./pages/LoginPage";

function App() {
  const isDarkTheme = useSelector(
    (bigpie) => bigpie.darkThemeSlice.isDarkTheme
  );
  return (
    <div className={isDarkTheme}>
      {/* <header>
        <Navbar />
      </header> */}
      <main className="main">
        <LoginPage></LoginPage>
      </main>
    </div>
  );
}

export default App;
