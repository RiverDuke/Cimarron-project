import React from "react";
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

function Layout() {
  return (
    <div className="">
      <NavBar />
      <Routes />
    </div>
  );
}

export default Layout;
