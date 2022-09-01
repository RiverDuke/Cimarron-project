import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import "../css/dashboard.css";
import "../css/menus.css";
import NavBar from "./Nav";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */

// <div className="row h-100">
// <div className="col-md-2 side-bar">
// navbar navbar-dark bg-dark menu

function Layout() {
  return (
    <div className="">
      {/* <div className="navbar navbar-dark bg-dark menu"> */}
      {/* <Menu /> */}
      {/* </div> */}
      {/* <div className="col"> */}
      <NavBar />
      <Routes />
      {/* </div> */}
    </div>
  );
}

// let navbar = document.getElementById("navbar");
// let menu = document.getElementById("menu");
// let url = window.location.href;
// console.log(url);

export default Layout;
