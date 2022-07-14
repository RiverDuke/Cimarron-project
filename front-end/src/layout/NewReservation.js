import React, { useState } from "react";

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

  function onChange({ target }) {
    setData({
      ...data,
      [target.name]: target.value,
    });
    console.log(data);
  }

  function onSubmit() {}

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">First Name</label>
        <input
          name="first_name"
          type="text"
          className="form-control"
          id="name"
          onChange={onChange}
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
        ></input>
      </div>
      <button type="button" className="btn btn-secondary mr-2">
        Cancel
      </button>
      <button type="button" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
