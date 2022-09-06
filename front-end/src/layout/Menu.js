import React from "react";
import "../css/menus.css";
import { Link } from "react-router-dom";
import fancyplate from "../images/fancyPlate.webp";
import smoothiePic from "../images/Apple-Smoothie-007.webp";
import cheesCake from "../images/cheeseCake.jpeg";
import burgerPic from "../images/Burger.jpeg";
import chickenPic from "../images/as-baked-chicken-threeByTwoMediumAt2X.jpeg";
import saladPic from "../images/Simple-Green-Salad-with-Vinaigrette-Square-FS-3241.jpeg";
/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  return (
    <>
      <div className="jumbotron front-page-image position container-fluid d-flex flex-column align-items-center">
        <h3 className="lead mx-auto font-italic text-white display-1 text-center pt-3">
          "Satisfy that Cimarron Appitite"
        </h3>

        <div className=" mt-auto mb-5">
          <Link className=" btn btn-danger btn-lg ">Book A Reservation</Link>
        </div>
      </div>
      <div className="container menu">
        <h1 className="d-block text-center display-2 ">MENU</h1>
        <div className="row d-flex justify-content-center">
          <div class="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={fancyplate}
              class="card-img-top img-thumbnail"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={smoothiePic}
              class="card-img-top img-thumbnail"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-0 m-4" style={{ width: "18rem" }}>
            <img src={cheesCake} class="card-img-top img-thumbnail" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-0 m-4" style={{ width: "18rem" }}>
            <img src={burgerPic} class="card-img-top img-thumbnail" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={chickenPic}
              class="card-img-top img-thumbnail"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-0 m-4" style={{ width: "18rem" }}>
            <img src={saladPic} class="card-img-top img-thumbnail" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex m-3">
        <button
          type="button"
          className="btn btn-primary mx-auto"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          View our Menu
        </button>
      </div>

      <div
        class="modal fade mr-3 "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl ">
          <div class="modal-content">
            <div class="pop-up-image">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
