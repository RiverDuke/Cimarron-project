import React, { useEffect } from "react";
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
  useEffect(() => {
    let navbar = document.getElementById("navbar");

    navbar.classList.remove("navshadow");
    return () => {
      navbar.classList.add("navshadow");
    };
  }, []);

  return (
    <div className="p-0 m-0">
      <div className="jumbotron front-page-image container-fluid d-flex flex-column">
        <div className=" mt-auto mb-auto mx-auto" style={{ marginTop: "80px" }}>
          <h3 className="lead text-white text-center menu-font">
            Satisfy that Simmerin' Appetite
          </h3>
          <div className="mt-5 mb-5 justify-content-center text-center">
            <Link
              className=" btn btn-lg btn-danger red-button font400"
              to="/reservations/new"
            >
              Book A Reservation
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <h1 className="d-block text-center display-3 ml-3 mb-4">MENU</h1>

        <div className="row d-flex justify-content-center">
          <div className="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={fancyplate}
              className="card-img-top img-thumbnail"
              alt="Filet Mignon"
            />

            <div className="card-body ">
              <h4 className="card-title">Filet Mignon</h4>
              <p className="card-text">
                The Filet Mignon. Favored by many for its melt-in-your-mouth
                texture, a filet is one of the most popular cuts of beef you can
                find
              </p>
            </div>
          </div>

          <div className="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={smoothiePic}
              className="card-img-top img-thumbnail"
              alt="Smoothie"
            />
            <div className="card-body">
              <h4 className="card-title">Smoothie</h4>
              <p className="card-text">
                Fresh Squeezed Orange Juice, Pineapple Juice, or Apple juice
                used to make a perfectly blended smoothie
              </p>
            </div>
          </div>

          <div className="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={cheesCake}
              className="card-img-top img-thumbnail"
              alt="cheeseCake"
            />
            <div className="card-body">
              <h4 className="card-title">Cheesecake</h4>
              <p className="card-text">
                Our legendary creamy California cheesecake baked on a golden
                graham cracker crumb
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={burgerPic}
              className="card-img-top img-thumbnail"
              alt="Burger"
            />
            <div className="card-body">
              <h4 className="card-title">Black Angus Burger</h4>
              <p className="card-text">
                Hand-formed, 6 oz., Angus patty, stacked with Applewood-smoked
                bacon, Cheddar cheese, lettuce, tomato, onion and house-made
                pickles
              </p>
            </div>
          </div>
          <div className="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={chickenPic}
              className="card-img-top img-thumbnail"
              alt="Chicken Legs"
            />
            <div className="card-body">
              <h4 className="card-title">Chicken Legs</h4>
              <p className="card-text">
                A chicken leg extends from the claw to what would be the
                animal's hip, a prime and highly favored piece of the bird
              </p>
            </div>
          </div>
          <div className="card border-0 m-4" style={{ width: "18rem" }}>
            <img
              src={saladPic}
              className="card-img-top img-thumbnail"
              alt="Salad"
            />
            <div className="card-body">
              <h4 className="card-title">Classic Salad</h4>
              <p className="card-text">
                This salad has all the perfect blends of all the best textures
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex m-4">
        <button
          type="button"
          className="btn btn-lg btn-outline-danger red-button-outline mx-auto font400"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          View our Menu
        </button>
      </div>
      <hr className="style-two hr-margin"></hr>
      <div
        className="modal fade mr-3 "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl ">
          <div className="modal-content">
            <div className="pop-up-image">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" display-3 text-center">Dine with Us</h1>

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade container mt-5"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="jumbotron car-image1 mx-5 d-flex container mx-auto"></div>
          </div>
          <div className="carousel-item">
            <div className="jumbotron car-image2 mx-5 d-flex container mx-auto"></div>
          </div>
          <div className="carousel-item">
            <div className="jumbotron car-image3 mx-5 d-flex container mx-auto"></div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
          data-target="#carouselExampleFade"
          style={{ opacity: "1" }}
        >
          <span
            className="carousel-control-prev-icon mt-4"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
          data-target="#carouselExampleFade"
          style={{ opacity: "1" }}
        >
          <span
            className="carousel-control-next-icon mt-4"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <hr className="style-two hr-margin"></hr>
      <div className=" d-flex flex-column align-items-center">
        <h1 className="text-center display-3">Located in California</h1>
        <h3>Manhattan Beach, CA 90266</h3>
        <div className="d-flex my-2 container rounded map-margin">
          <iframe
            className="map-margin"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26496.04952670603!2d-118.40114254999999!3d33.889494400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b3c5e2b0632f%3A0x70351d4f4154520!2sManhattan%20Beach%2C%20CA%2090266!5e0!3m2!1sen!2sus!4v1663313389070!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: "0", borderRadius: "5px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GoogleMaps to Manhatten Beach"
          ></iframe>

          <div className="imgStreetView jumbotron ml-2 map-margin"> </div>
        </div>

        <div className="book-button">
          <Link
            className=" btn btn-lg btn-danger red-button ml-3 font400"
            to="/reservations/new"
          >
            Book A Reservation
          </Link>
        </div>
      </div>

      <div className="navbar navbar-expand-lg footer d-flex justify-content-between flex-row">
        <div className="text-white justify-content-left ml-4">
          Copyright ?? 2022 River Duke. All rights reserved.
        </div>
        <div className="mr-4 ">
          <a
            className="text-white"
            href="https://github.com/RiverDuke"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="text-white mx-5"
            href="https://www.linkedin.com/in/river-duke/"
            target="_blank"
            rel="noreferrer"
          >
            Contact Me
          </a>
          <a
            className="text-white "
            href="https://riverduke.com/"
            target="_blank"
            rel="noreferrer"
          >
            riverduke.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
