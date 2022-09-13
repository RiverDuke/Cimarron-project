import React from "react";
import "../css/menus.css";
import "../css/dashboard.css";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

export default function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg d-flex navbar-light navshadow"
        id="navbar"
      >
        <div className="navbar-brand">
          <img src={logo} className="logo" alt="Logo"></img>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/home">
                <span className="oi oi-home " />
                &nbsp;Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/dashboard">
                <span className="oi oi-dashboard" />
                &nbsp;Manage Bookings
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-dark" to="/search">
                <span className="oi oi-magnifying-glass" />
                &nbsp;Search
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link text-dark" to="/reservations/new">
                <span className="oi oi-plus" />
                &nbsp;New Reservation
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link text-dark" to="/tables/new">
                <span className="oi oi-layers" />
                &nbsp;New Table
              </Link>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources
              </a>
              <div
                className="dropdown-menu dropdown-menu-right ml-2"
                aria-labelledby="navbarDropdown"
              >
                <Link className="nav-link text-dark ml-2" to="/search">
                  <span className="oi oi-magnifying-glass" />
                  &nbsp;Search
                </Link>
                {/* <Link className="nav-link text-dark" to="/dashboard">
                  <span className="oi oi-dashboard" />
                  &nbsp;Dashboard
                </Link> */}
                <Link
                  className="nav-link text-dark ml-2"
                  to="/reservations/new"
                >
                  <span className="oi oi-plus" />
                  &nbsp;New Reservation
                </Link>
                <Link className="nav-link text-dark ml-2" to="/tables/new">
                  <span className="oi oi-layers" />
                  &nbsp;New Table
                </Link>
                {/* <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a> */}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
