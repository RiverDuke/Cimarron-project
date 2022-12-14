import React from "react";
import "../css/menus.css";
import "../css/dashboard.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
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
          <a href="/home">
            <img src={logo} className="logo" alt="Logo"></img>
          </a>
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
                <i
                  className="bi bi-house-door-fill"
                  style={{ fontSize: "20px" }}
                ></i>
                &nbsp;Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/dashboard">
                <i
                  className="bi bi-journal-bookmark"
                  style={{ fontSize: "20px" }}
                ></i>
                &nbsp;Manage Reservations
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle text-dark mt-1"
                // href="javascript:;"

                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources
              </div>
              <div
                className="dropdown-menu dropdown-menu-right ml-2"
                aria-labelledby="navbarDropdown"
              >
                <Link className="nav-link text-dark ml-2" to="/search">
                  <i className="bi bi-search" style={{ fontSize: "20px" }}></i>
                  &nbsp;Search
                </Link>

                <Link
                  className="nav-link text-dark ml-2"
                  to="/reservations/new"
                >
                  <i
                    className="bi bi-calendar-check"
                    style={{ fontSize: "20px" }}
                  ></i>
                  &nbsp;New Reservation
                </Link>
                <Link className="nav-link text-dark ml-2" to="/tables/new">
                  <i
                    className="bi bi-plus-circle "
                    style={{ fontSize: "20px" }}
                  ></i>
                  &nbsp;New Table
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
