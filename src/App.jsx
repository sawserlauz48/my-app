import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CardComponent from "./components/CardComponent";
import InputComponent from "./components/InputComponent";
import { useSelector } from "react-redux";

function App() {
  const isDarkTheme = useSelector(
    (bigpie) => bigpie.darkThemeSlice.isDarkTheme
  );
  return (
    <div className={isDarkTheme}>
      <header>
        <Navbar />
      </header>
      <main>
        <CardComponent></CardComponent>
        <InputComponent></InputComponent>
      </main>
    </div>
  );
}

export default App;
