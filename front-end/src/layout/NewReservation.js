import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createReservation } from "../utils/api";

export default function Reservation() {
  const initialValue = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 0,
  };
  const [data, setData] = useState({ ...initialValue });
  const history = useHistory();

  function onChange({ target }) {
    setData({
      ...data,
      [target.name]: target.value,
    });
    console.log(data);
  }

  async function onSubmit(event) {
    const ac = new AbortController();
    console.log("hello");
    event.preventDefault();
    try {
      await createReservation(data, ac.signal);
      history.push("/dashboard");
    } catch (error) {}
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">First Name</label>
        <input
          name="first_name"
          type="text"
          className="form-control"
          id="name"
          onChange={onChange}
          value={data.name}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="name">Last Name</label>
        <input
          name="last_name"
          type="text"
          className="form-control"
          id="name"
          onChange={onChange}
          value={data.name}
          required
        ></input>
      </div>
      <div className="form-group .col-6">
        <label htmlFor="name">Mobile Number</label>
        <input
          name="mobile_number"
          type="text"
          className="form-control"
          id="name"
          onChange={onChange}
          value={data.name}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="name"> Reservation Date</label>
        <input
          name="reservation_date"
          type="date"
          className="form-control"
          id="name"
          onChange={onChange}
          value={data.name}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="name"> Reservation Time</label>
        <input
          name="reservation_time"
          type="time"
          className="form-control"
          id="name"
          onChange={onChange}
          value={data.name}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="name"> Party Size</label>
        <input
          name="people"
          type="number"
          className="form-control"
          id="name"
          onChange={onChange}
          value={data.name}
          required
        ></input>
      </div>
      <button
        type="button"
        className="btn btn-secondary mr-2"
        onClick={() => history.goBack()}
      >
        Cancel
      </button>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
