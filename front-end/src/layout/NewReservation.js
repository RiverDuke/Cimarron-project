import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createReservation } from "../utils/api";
import resPic from "../images/niceCounter.png";

export function ReservationForm({ onChange, data, onSubmit }) {
  const history = useHistory();
  return (
    <form onSubmit={onSubmit} className="">
      <div className="form-group col-md-7 col-sm-12 mx-auto">
        <label htmlFor="name">First Name:</label>
        <input
          name="first_name"
          type="text"
          className="form-control"
          id="name"
          onChange={onChange}
          value={data.first_name}
          required
        ></input>
      </div>
      <div className="form-group col-md-7 col-sm-12 mx-auto">
        <label htmlFor="name">Last Name:</label>
        <input
          name="last_name"
          type="text"
          className="form-control"
          id="name"
          onChange={onChange}
          value={data.last_name}
          required
        ></input>
      </div>
      <div className="form-group col-md-7 col-sm-12 mx-auto">
        <label htmlFor="name">Mobile Number:</label>
        <input
          name="mobile_number"
          type="text"
          className="form-control"
          id="name"
          onChange={onChange}
          value={data.mobile_number}
          required
        ></input>
      </div>
      <div className="form-group col-md-7 col-sm-12 mx-auto">
        <label htmlFor="reservation_date"> Reservation Date:</label>
        <input
          name="reservation_date"
          type="date"
          className="form-control"
          id="reservation_date"
          onChange={onChange}
          value={data.reservation_date}
          required
        ></input>
      </div>
      <div className="form-group col-md-7 col-sm-12 mx-auto">
        <label htmlFor="name"> Reservation Time:</label>
        <input
          name="reservation_time"
          type="time"
          className="form-control"
          id="name"
          onChange={onChange}
          value={data.reservation_time}
          required
          step="900"
        ></input>
      </div>
      <div className="form-group col-md-7 col-sm-12 mx-auto">
        <label htmlFor="name"> Party Size:</label>
        <input
          name="people"
          type="number"
          className="form-control"
          id="name"
          onChange={onChange}
          value={data.people}
          required
        ></input>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-outline-primary mt-3">
          Submit
        </button>
      </div>
    </form>
  );
}
export default function Reservation() {
  const initialValue = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 0,
  };
  const [data, setData] = useState(initialValue);
  const [reservationsError, setReservationsError] = useState(null);
  const history = useHistory();

  function onChange({ target }) {
    setData({
      ...data,
      [target.name]: target.value,
    });
  }

  async function onSubmit(event) {
    event.preventDefault();
    setReservationsError(null);
    data.people = Number(data.people);

    try {
      const res = await createReservation(data);
      const body = await res.json();

      if (res.status >= 299 || res.status < 200) {
        throw body.error;
      } else {
        history.push(`/dashboard?date=${data.reservation_date}`);
      }
    } catch (err) {
      setReservationsError(err);
    }
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

  return (
    <div className="container mt-3">
      <h1 className="display-3 text-center mt-5 ">Create a Reservation</h1>
      <ErrorHandle />
      <div className="row mt-5">
        <div className="col-12 col-md-6 text-center">
          <img
            src={resPic}
            class="img-fluid"
            alt="Table-Layout"
            style={{
              width: "500px",
              maxWidth: "100%",
              height: "auto",
            }}
          ></img>
          <p className="mt-3 font-italic">
            *Reservations will be forfeited for any arrivals 15 minutes after
            their time, closed on Tuesday
          </p>
        </div>
        <div className="col-12 col-md-6 mb-5">
          <ReservationForm
            onChange={onChange}
            data={data}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}
