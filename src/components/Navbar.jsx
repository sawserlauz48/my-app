import {
  moonIcon,
  sunIcon,
  profileIcon,
  truckIcon,
  loginIcon,
  logoutIcon,
  infoIcon,
  orderTableIcon,
  homeIcon,
} from "../images/svgs";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeActions } from "../store/darkTheme";
import { useEffect, useState } from "react";
import ROUTES from "../routes/ROUTES";
import NavLinkComponent from "./NavLinkComponent";

const pages = [
  { label: "Home", url: ROUTES.HOME },
  { label: "Take away", url: ROUTES.TAKEAWAY },
  { label: "Order table", url: ROUTES.ORDERTABLE },
  { label: "About", url: ROUTES.ABOUT },
  { label: "Profile page", url: ROUTES.PROFILE },
  { label: "Sign in", url: ROUTES.LOGIN },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(
    (bigPie) => bigPie.darkThemeSlice.isDarkTheme
  );

  const changeTheme = () => {
    if (isDarkTheme === "light") {
      dispatch(darkThemeActions.setToDarkTheme());
    }
    if (isDarkTheme === "dark") {
      dispatch(darkThemeActions.setToLightTheme());
    }
  };

  return (
    <nav className="navbar dark:bg-darkmode-accent dark:border-r-[0.1px] dark:border-slate-700 border-r-[0.1px] border-slate-50">
      <div className="drawer-swipe"></div>
      <ul className="navbar-nav grid grid-cols-1">
        <li className="nav-item logo flex-row">
          <NavLinkComponent
            url={ROUTES.HOME}
            icon={homeIcon}
            label={"ANATOLIA"}
          ></NavLinkComponent>
        </li>
        <li className="my-1 divider text-slate-400 text-xs flex justify-center">
          MENU
        </li>
        <li className="nav-item">
          <NavLinkComponent
            url={ROUTES.TAKEAWAY}
            icon={truckIcon}
            label={"Take away"}
          ></NavLinkComponent>
        </li>
        <li className="nav-item ">
          <NavLinkComponent
            url={ROUTES.ORDERTABLE}
            icon={orderTableIcon}
            label={"Order table"}
          ></NavLinkComponent>
        </li>
        <li className="nav-item ">
          <NavLinkComponent
            url={ROUTES.ABOUT}
            icon={infoIcon}
            label={"About us"}
          ></NavLinkComponent>
        </li>
        <li className="divider nav-item mt-2 text-slate-400 text-xs flex justify-center">
          PROFILE
        </li>
        <li className="nav-item ">
          <NavLinkComponent
            url={ROUTES.PROFILE}
            icon={profileIcon}
            label={"Profie page"}
          ></NavLinkComponent>
        </li>
        <li className="nav-item  ">
          <a href="#" className="nav-link flex flex-row" onClick={changeTheme}>
            <div className="nav-icon">
              {isDarkTheme === "light" ? moonIcon : sunIcon}
            </div>
            <span className="link-text">Theme</span>
          </a>
        </li>
        <li className="nav-item ">
          <NavLinkComponent
            url={ROUTES.LOGIN}
            icon={loginIcon}
            label={"Sign in"}
          ></NavLinkComponent>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
