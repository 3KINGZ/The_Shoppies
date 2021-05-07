import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="title">
        <span>The</span>
        <span>Shoppies</span>
      </p>

      <div>
        <NavLink to="/" className="link" activeClassName="link-active">
          <p>Home</p>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/nominations"
          className="link"
          activeClassName="link-active"
        >
          <p>Nominations</p>
        </NavLink>
      </div>
    </div>
  );
};
