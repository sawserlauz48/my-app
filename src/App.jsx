import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CardComponent from "./components/CardComponent";
import InputComponent from "./components/InputComponent";

function App() {
  const [darkTheme, setDarkTheme] = useState("light");

  const handleBtnClick = () => {
    if (darkTheme === "light") {
      setDarkTheme("dark");
    }
    if (darkTheme === "dark") {
      setDarkTheme("light");
    }
  };
  console.log(darkTheme);
  return (
    <div className={darkTheme}>
      <header>
        <Navbar onClick={handleBtnClick} />
        <button onClick={handleBtnClick}></button>
      </header>
      <body>
        <CardComponent></CardComponent>
        <InputComponent></InputComponent>
      </body>
    </div>
  );
}

export default App;
