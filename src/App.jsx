import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Router from "./routes/router";

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
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
