import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ url, label, icon, onclick, ...rest }) => {
  return (
    <div className="nav-link flex flex-row">
      <NavLink
        onClick={onclick}
        to={url}
        {...rest}
        className={({ isActive }) =>
          isActive
            ? "text-lightmode-pBtn flex sm:flex-row flex-col"
            : "flex sm:flex-row dark:text-white flex-col "
        }
      >
        <div className="hover:text-lightmode-pBtn flex flex-col sm:flex-row">
          <div className="nav-icon ">{icon}</div>
          <span className="link-text sm:text-lightmode-pBtn ">{label}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default NavLinkComponent;
