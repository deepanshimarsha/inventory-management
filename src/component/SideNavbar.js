import { NavLink } from "react-router-dom";
import "../styles/side-navbar.css";

export default function SideNavbar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 side-navbar">
      <ul className="nav  nav-flush flex-column mb-auto text-center nav-links">
        <li className="nav-item">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "400",
              color: isActive ? "white" : "#5f5f5f",
            })}
            className="nav-link py-3"
            aria-current="page"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Home"
          >
            <div className="nav-item-heading">Dashboard</div>
            {/* </svg> */}
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/department"
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "400",
              color: isActive ? "white" : "#5f5f5f",
            })}
            className="nav-link py-3 "
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Products"
          >
            <div className="nav-item-heading">Departments</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/products"
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "400",
              color: isActive ? "white" : "#5f5f5f",
            })}
            className="nav-link py-3"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Dashboard"
          >
            <div className="nav-item-heading">Products</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
