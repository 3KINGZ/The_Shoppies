import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/">
        <div>
          <p>Home</p>
        </div>
      </NavLink>
      <NavLink to="/nominations">
        <div>
          <p>Nominations</p>
        </div>
      </NavLink>
    </div>
  );
};
