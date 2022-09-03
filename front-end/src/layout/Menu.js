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
      <div className=" front-page-image position container-fluid d-flex flex-column align-items-center">
        <h3 className=" lead mx-auto font-italic text-white display-1 text-center pt-3">
          "Satisfy that Cimarron Appitite"
        </h3>

        <div className=" mt-auto mb-5">
          <Link className=" btn btn-danger btn-lg ">Book A Reservation</Link>
        </div>
      </div>

      <div className="container menu">
        <h1 className="d-block text-center display-2">MENU</h1>
        <div className="row d-flex justify-content-center">
          <div class="card border-light m-4" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-light m-4" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-light m-4" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-light m-4" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-light m-4" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card border-light m-4" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Launch demo modal
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
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
