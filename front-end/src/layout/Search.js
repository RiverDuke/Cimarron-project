import { ResrVation } from "../dashboard/Dashboard";
import "../css/menus.css";
import "../css/dashboard.css";
import React, { useState } from "react";
import { listReservations } from "../utils/api";
import "../css/index.css";
export default function Search() {
  const initialState = {
    mobile_number: "",
  };
  const [data, setData] = useState({ ...initialState });
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const [noMatch, setNoMatch] = useState("");

  function onChange({ target }) {
    setData({
      ...data,
      [target.name]: target.value,
    });
  }

  function ErrorHandle() {
    return (
      reservationsError && (
        <div className="alert alert-danger mt-2 mb-2" role="alert">
          {reservationsError}
        </div>
      )
    );
  }

  function ReservationDisplay() {
    if (reservations.length === 0) {
      return null;
    } else {
      return <ResrVation reservations={reservations} />;
    }
  }

  function NotFound() {
    if (noMatch) {
      return (
        <div className="alert alert-danger mt-2 mb-2" role="alert">
          {noMatch}
        </div>
      );
    } else {
      return null;
    }
  }

  async function display() {
    const list = await listReservations({ mobile_number: data.mobile_number });
    if (list.length === 0) {
      setNoMatch("No reservations found");
    } else {
      setReservations(list);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setReservationsError(null);
    setNoMatch(null);
    setReservations([]);
    try {
      display();
    } catch (err) {
      setReservationsError(err);
    }
  }

  return (
    <div className="container-fluid mt-3">
      <h1
        className="card-title text-center display-3 mt-5"
        style={{ fontSize: "70px" }}
      >
        Search Reservations
      </h1>
      <ErrorHandle />
      <form
        className="form-group col-md-5 col-sm-12 mx-auto mt-4 mb-5"
        onSubmit={handleSubmit}
      >
        <label htmlFor="mobile_number" style={{ fontSize: "30px" }}>
          <h4 className="m-0 font-weight-light mt-4">Mobile Number:</h4>
        </label>
        <div className="input-group">
          <input
            type="text"
            id="mobile_number"
            name="mobile_number"
            className="form-control"
            placeholder="Enter the customer's mobile number"
            onChange={onChange}
            required
            value={data.mobile_number}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-danger red-button ml-2">
              <span className="oi oi-magnifying-glass"></span> Find
            </button>
          </div>
        </div>
      </form>
      <div className="container">
        <ReservationDisplay />
        <NotFound />
      </div>
    </div>
  );
}
