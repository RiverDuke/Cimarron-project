import { ResrVation } from "../dashboard/Dashboard";
import React, { useState } from "react";
import { listReservations } from "../utils/api";

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
      return (
        <ResrVation
          reservations={reservations}
          loadDashboard={listReservations({
            mobile_number: data.mobile_number,
          })}
        />
      );
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

  async function handleSubmit(event) {
    event.preventDefault();
    const abortController = new AbortController();
    setReservationsError(null);
    setNoMatch(null);
    setReservations([]);
    await listReservations(
      { mobile_number: data.mobile_number },
      abortController.signal
    )
      .then((response) => {
        console.log(response);
        if (response.length === 0) {
          setNoMatch("No reservations found");
        } else {
          setReservations(response);
        }
      })

      .catch(setReservationsError);
    return () => abortController.abort();
  }
  console.log(reservations);
  return (
    <>
      <h1 className="card-title">Search Reservations</h1>
      <ErrorHandle />
      <form className="form-group col-md-4 col-sm-12" onSubmit={handleSubmit}>
        <label htmlFor="mobile_number">Mobile Number:</label>
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
            <button type="submit" className="btn btn-primary ml-2">
              <span className="oi oi-magnifying-glass"></span> Find
            </button>
          </div>
        </div>
      </form>
      <ReservationDisplay />
      <NotFound />
    </>
  );
}
