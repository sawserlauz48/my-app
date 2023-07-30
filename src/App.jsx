import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Router from "./routes/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const isDarkTheme = useSelector(
    (bigpie) => bigpie.darkThemeSlice.isDarkTheme
  );
  return (
    <div className={isDarkTheme}>
      <div className="bg-lightmode-bg dark:bg-darkmode-bg text-lightmode-text dark:text-darkmode-text">
        <header>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
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
