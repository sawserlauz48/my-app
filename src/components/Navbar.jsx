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
} from "../images/svgs";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeActions } from "../store/darkTheme";

const Navbar = () => {
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

  console.log(isDarkTheme, "isDarkTheme");
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <a href="#">
            <div className="icon">{homeIcon}</div>
            <div className="text">ANATOLIA</div>
          </a>
        </li>
        <div className="menuList">
          <li>
            <div className="text">MENU</div>
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
            <div className="text">PROFILE</div>
          </li>
          <li>
            <a href="#">
              <div className="icon">{profileIcon}</div>
              <div className="text">PROFILE PAGE</div>
            </a>
          </li>
          <li onClick={changeTheme}>
            <a href="#">
              <div className="icon">
                {isDarkTheme === "dark" ? sunIcon : moonIcon}
              </div>
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
