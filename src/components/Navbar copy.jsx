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
    <div
      className={` ${
        isNavOpen ? "nav-open" : "navbar"
      } dark:border-r-[0.1px] dark:border-slate-700 border-r-[0.1px] border-slate-50`}
    >
      <div
        className="menuToggle flex justify-center items-center hover:text-lightmode-pBtn hover:cursor-pointer"
        onClick={toggleNavbar}
      >
        {isNavOpen ? arrowLeft : arrowRight}
      </div>
      <ul>
        <li className="logo">
          <a href="#">
            <div className="icon">{homeIcon}</div>
            <div className="text">ANATOLIA</div>
          </a>
        </li>
        <div className="menuList">
          <li>
            <div className="text text-[0.8em] ml-2">MENU</div>
          </li>
          <li>
            <a href="#">
              <div className="icon">{truckIcon}</div>
              <div className="text">TAKE AWAY</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon">{orderTableIcon}</div>
              <div className="text">ORDER TABLE</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon">{infoIcon}</div>
              <div className="text">ABOUT US</div>
            </a>
          </li>
        </div>
        <div className="menuListBottom">
          <li>
            <div className="text text-[0.8em] ml-2">PROFILE</div>
          </li>
          <li>
            <a href="#">
              <div className="icon">{profileIcon}</div>
              <div className="text">PROFILE PAGE</div>
            </a>
          </li>
          <li>
            <a href="#" onClick={changeTheme}>
              <div className="icon">{sunIcon}</div>
              <div className="text">DARKMODE</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon">{loginIcon}</div>
              <div className="text">LOGIN</div>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
