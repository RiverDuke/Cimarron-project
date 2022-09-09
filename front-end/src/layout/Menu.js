import React from "react";
import "../css/menus.css";
import { Link } from "react-router-dom";
import fancyplate from "../images/fancyPlate.webp";
import smoothiePic from "../images/Apple-Smoothie-007.webp";
import cheesCake from "../images/cheeseCake.jpeg";
import burgerPic from "../images/Burger.jpeg";
import chickenPic from "../images/as-baked-chicken-threeByTwoMediumAt2X.jpeg";
import saladPic from "../images/Simple-Green-Salad-with-Vinaigrette-Square-FS-3241.jpeg";
import mapPic from "../images/map.png";
/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  return (
    <>
      <div className="jumbotron front-page-image container-fluid d-flex flex-column ">
        <div className="mt-auto mb-auto mx-auto">
          <h3 className="lead font-italic text-white display-1 mb-5 ">
            "Satisfy that Cimarron Appitite"
          </h3>
          <div className="mb-5 justify-content-center text-center">
            <Link className=" btn btn-danger btn-lg " to="/reservations/new">
              Book A Reservation
            </Link>
          </div>
        </div>
      </div>
      <div className="container menu">
        <h1 className="d-block text-center display-2 ">MENU</h1>
        <div className="row d-flex justify-content-center">
          <div class="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={fancyplate}
              class="card-img-top img-thumbnail"
              alt="Filet Mignon"
            />
            <div class="card-body">
              <h5 class="card-title">Filet Mignon</h5>
              <p class="card-text">
                The Filet Mignon. Favored by many for its melt-in-your-mouth
                texture, a filet is one of the most popular cuts of beef you can
                find
              </p>
            </div>
          </div>
          <div class="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={smoothiePic}
              class="card-img-top img-thumbnail"
              alt="Smoothie"
            />
            <div class="card-body">
              <h5 class="card-title">Smoothie</h5>
              <p class="card-text">
                Fresh Squeezed Orange Juice, Pineapple Juice, or Apple juice
                used to make a perfectly blended smoothie
              </p>
            </div>
          </div>
          <div class="card border-0 m-4" style={{ width: "18rem" }}>
            <img src={cheesCake} class="card-img-top img-thumbnail" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Cheesecake</h5>
              <p class="card-text">
                Our legendary creamy California cheesecake baked on a golden
                graham cracker crumb
              </p>
            </div>
          </div>
          <div class="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={burgerPic}
              class="card-img-top img-thumbnail"
              alt="Burger"
            />
            <div class="card-body">
              <h5 class="card-title">Black Angus Burger</h5>
              <p class="card-text">
                Hand-formed, 6 oz., Angus patty, stacked with Applewood-smoked
                bacon, Cheddar cheese, lettuce, tomato, onion and house-made
                pickles
              </p>
            </div>
          </div>
          <div class="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={chickenPic}
              class="card-img-top img-thumbnail"
              alt="Chicken Legs"
            />
            <div class="card-body">
              <h5 class="card-title">Chicken Legs</h5>
              <p class="card-text">
                A chicken leg extends from the claw to what would be the
                animal's hip, a prime and highly favored piece of the bird
              </p>
            </div>
          </div>
          <div class="card border-0 m-4" style={{ width: "18rem" }}>
            <img src={saladPic} class="card-img-top img-thumbnail" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Classic Salad</h5>
              <p class="card-text">
                This salad has all the perfect blends of all the best textures
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
      <div class="jumbotron menu vibe-image">
        <h1 class="lead mx-auto font-italic text-white display-1 text-center pt-3">
          Enjoy our Fine Dining
        </h1>
      </div>
      <div className="menu d-flex flex-column align-items-center">
        <h1 className="text-center display-2">Location :</h1>
        <h3>1275 Embarcadero Morro Bay, CA 93442</h3>
        <img
          src={mapPic}
          class="img-thumbnail  rounded mx-auto d-block google-map"
          alt="Google map image"
        ></img>
        <div className="book-button">
          <Link className=" btn btn-danger btn-lg" to="/reservations/new">
            Book A Reservation
          </Link>
        </div>
      </div>
      <div class="navbar navbar-expand-lg hello footer"></div>
    </>
  );
}

export default Menu;
