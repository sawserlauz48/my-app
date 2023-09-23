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
} from "../../images/svgs";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeActions } from "../../store/darkTheme";
import ROUTES from "../../routes/ROUTES";
import NavLinkComponent from "./NavLinkComponent";
import { authActions } from "../../store/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(
    (bigPie) => bigPie.darkThemeSlice.isDarkTheme
  );
  const isLoggedIn = useSelector((bigPie) => bigPie.authSlice.isLoggedIn);

  const changeTheme = () => {
    if (isDarkTheme === "light") {
      dispatch(darkThemeActions.setToDarkTheme());
    }
    if (isDarkTheme === "dark") {
      dispatch(darkThemeActions.setToLightTheme());
    }
  };
  const logoutClick = () => {
    localStorage.clear();
    dispatch(authActions.logout());
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
            url={ROUTES.ABOUT}
            icon={infoIcon}
            label={"About us"}
          ></NavLinkComponent>
        </li>
        <li className="divider nav-item mt-2 text-slate-400 text-xs flex justify-center">
          PROFILE
        </li>
        <li className="nav-item ">
          <div className="">
            <NavLinkComponent
              url={ROUTES.PROFILE}
              icon={profileIcon}
              label={"Profie page"}
            ></NavLinkComponent>
          </div>
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
          {isLoggedIn ? (
            <NavLinkComponent
              icon={logoutIcon}
              label={"Sign out"}
              onClick={logoutClick}
            />
          ) : (
            <NavLinkComponent
              url={ROUTES.LOGIN}
              icon={loginIcon}
              label={"Sign in"}
            />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
