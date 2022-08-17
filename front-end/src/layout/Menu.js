import React from "react";
import "../css/menus.css";
import { Link } from "react-router-dom";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  // return (
  //   <nav className="navbar navbar-dark align-items-start p-0">
  //     <div className="container-fluid d-flex flex-column p-0">
  //       <Link
  //         className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
  //         to="/"
  //       >
  //         <div className="sidebar-brand-text mx-3">
  //           <span>Periodic Tables</span>
  //         </div>
  //       </Link>
  //       <hr className="sidebar-divider my-0" />
  //       <ul className="nav navbar-nav text-light" id="accordionSidebar">
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/dashboard">
  //             <span className="oi oi-dashboard" />
  //             &nbsp;Dashboard
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/search">
  //             <span className="oi oi-magnifying-glass" />
  //             &nbsp;Search
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/reservations/new">
  //             <span className="oi oi-plus" />
  //             &nbsp;New Reservation
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/tables/new">
  //             <span className="oi oi-layers" />
  //             &nbsp;New Table
  //           </Link>
  //         </li>
  //       </ul>
  //       <div className="text-center d-none d-md-inline">
  //         <button
  //           className="btn rounded-circle border-0"
  //           id="sidebarToggle"
  //           type="button"
  //         />
  //       </div>
  //     </div>
  //   </nav>
  // );

  function MenuIcon() {
    return (
      <div className="menu-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          className="bi bi-border-width"
          viewBox="0 0 16 16"
        >
          <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
        </svg>
        <div className="sub-menu dropdown-menu-right">
          <span style={{ display: "none" }}>Periodic Tables</span>
          <ul className="nav navbar-nav text-light ml-2" id="accordionSidebar">
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
      </div>
    );
  }

  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-between ">
      <div className="menu-logo ">
        <p>Logo</p>
      </div>
      <MenuIcon />
    </nav>
  );
}

export default Menu;
