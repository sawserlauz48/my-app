import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ url, label, icon, ...rest }) => {
  return (
    <div className="nav-link flex flex-row">
      <NavLink
        to={url}
        {...rest}
        className={({ isActive }) =>
          isActive
            ? "text-lightmode-pBtn flex sm:flex-row flex-col"
            : "flex sm:flex-row dark:text-white flex-col"
        }
      >
        <div className="nav-icon">{icon}</div>
        <span className="link-text">{label}</span>
      </NavLink>
    </div>
  );
};

export default NavLinkComponent;
