import {
  moonIcon,
  sunIcon,
  profileIcon,
  truckIcon,
  loginIcon,
  logoutIcon,
  creaditCardIcon,
  infoIcon,
  likeIcon,
  editIcon,
  deleteIcon,
  buyIcon,
  orderTableIcon,
  homeIcon,
  arrowLeft,
  arrowRight,
} from "../images/svgs";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeActions } from "../store/darkTheme";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(
    (bigPie) => bigPie.darkThemeSlice.isDarkTheme
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600 && isNavOpen) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isNavOpen]);

  const changeTheme = () => {
    if (isDarkTheme === "light") {
      dispatch(darkThemeActions.setToDarkTheme());
    }
    if (isDarkTheme === "dark") {
      dispatch(darkThemeActions.setToLightTheme());
    }
  };
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  console.log(isNavOpen, "isnavopen");

  return (
    <nav className="navbar dark:border-r-[0.1px] dark:border-slate-700 border-r-[0.1px] border-slate-50">
      {/* <div
        className="menuToggle flex justify-center items-center hover:text-lightmode-pBtn hover:cursor-pointer"
        onClick={toggleNavbar}
      >
        {isNavOpen ? arrowLeft : arrowRight}
      </div> */}
      <ul className="navbar-nav">
        <li className="nav-item logo">
          <a href="#" className="nav-link">
            <div className="nav-icon">{homeIcon}</div>
            <span className="link-text">logo</span>
          </a>
        </li>
        <li className="my-1 divider text-slate-400 text-xs">MENU</li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <div className="nav-icon">{truckIcon}</div>
            <span className="link-text">Take away</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <div className="nav-icon">{orderTableIcon}</div>
            <span className="link-text">Order table</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <div className="nav-icon">{infoIcon}</div>
            <span className="link-text">About us</span>
          </a>
        </li>
        <li className="divider mt-2 text-slate-400 text-xs">PROFILE</li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <div className="nav-icon">{profileIcon}</div>
            <span className="link-text">Profie page</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={changeTheme}>
            <div className="nav-icon">{sunIcon}</div>
            <span className="link-text">Theme</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <div className="nav-icon">{loginIcon}</div>
            <span className="link-text">Sing in</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;