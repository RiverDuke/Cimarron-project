import React from "react";
import "../css/menus.css";
import { Link } from "react-router-dom";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  return (
    <>
      <div className="front-page-image position container-fluid d-flex flex-column align-items-center">
        <h3 className=" mx-auto font-italic text-white display-1 text-center pt-3">
          "Satisy that Cimarron Appitite"
        </h3>

        <div className=" mt-auto mb-5">
          <Link className=" btn btn-danger btn-lg ">Book A Reservation</Link>
        </div>
      </div>

      <div className="container">
        <h1 className="">MENU</h1>
        <div className="row">
          <div class="card border-light m-2" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-light m-2" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-light m-2" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-light m-2" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-light m-2" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-light m-2" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <p>
          {" "}
          hello hello helllo ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf hello
          hello helllo ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf hello hello
          helllo ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf hello hello helllo
          ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf hello hello helllo
          ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf hello hello helllo
          ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf hello hello helllo
          ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf hello hello helllo
          ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdfhello hello helllo
          ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf hello hello helllo
          ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf hello hello helllo
          ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf hello hello helllo
          ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf hello hello helllo
          ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf hello hello helllo
          ehaodfhdaoifjhialdsjfildaskfjlkaksdjflkasdf
        </p>
      </div>
    </>
  );
}

export default Menu;
