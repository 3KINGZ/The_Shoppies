import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <div className="nav">
      <NavLink
        to="/"
        className="mobile-nav"
        activeClassName="mobile-nav-active"
      >
        <div>
          <p>Home</p>
        </div>
      </NavLink>
      <NavLink
        to="/nominations"
        className="mobile-nav"
        activeClassName="mobile-nav-active"
      >
        <div>
          <p>Nominations</p>
        </div>
      </NavLink>
    </div>
  );
};
