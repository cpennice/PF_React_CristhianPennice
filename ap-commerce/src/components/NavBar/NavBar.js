import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>Ecommerce</h3>
      </Link>

      <div className="Categories">
        <NavLink
          to={"/category/GPU"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          GPU
        </NavLink>
        <NavLink
          to={"/category/CPU"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          CPU
        </NavLink>
        <NavLink
          to={"/category/MB"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          MOTHERBOARD
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
