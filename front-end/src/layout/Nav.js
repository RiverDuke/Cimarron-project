import React from "react";
import "../css/menus.css";
import "../css/dashboard.css";
import { Link } from "react-router-dom";
import logo from "../images/PlatedSlices.png";

function MenuIcon() {
  return (
    // <div className="menu-icon" id="menu">
    <div className="navbar navbar-light " id="menu">
      {/* <div className="sub-menu dropdown-menu-right"> */}
      <span style={{ display: "none" }}>Periodic Tables</span>
      <img src={logo} className="logo"></img>
      <ul className="nav  ml-2 justify-content-center" id="accordionSidebar">
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            <span className="oi oi-home" />
            &nbsp;Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <span className="oi oi-dashboard" />
            &nbsp;Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">
            <span className="oi oi-magnifying-glass" />
            &nbsp;Search
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reservations/new">
            <span className="oi oi-plus" />
            &nbsp;New Reservation
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tables/new">
            <span className="oi oi-layers" />
            &nbsp;New Table
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default function NavBar() {
  return (
    // <nav id="navbar">
    //   <MenuIcon />
    // </nav>
    <nav class="navbar navbar-expand-lg d-flex navbar-light bg-light mr-auto ">
      <a class="navbar-brand" href="#">
        <img src={logo} className="logo"></img>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-row-reverse " id="navbarNav">
        <ul class="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              <span className="oi oi-home" />
              &nbsp;Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <span className="oi oi-dashboard" />
              &nbsp;Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              <span className="oi oi-magnifying-glass" />
              &nbsp;Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reservations/new">
              <span className="oi oi-plus" />
              &nbsp;New Reservation
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tables/new">
              <span className="oi oi-layers" />
              &nbsp;New Table
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
