import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

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
        <p>asdasdasd</p>
        <button onClick={handleBtnClick}>click</button>
      </header>
    </div>
  );
}

export default App;
