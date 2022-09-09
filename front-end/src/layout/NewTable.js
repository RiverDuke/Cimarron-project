import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createTable } from "../utils/api";

export default function NewTable() {
  const initialValue = {
    table_name: "",
    capacity: "",
  };
  const [data, setData] = useState({ ...initialValue });
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
    data.capacity = Number(data.capacity);

    try {
      const res = await createTable(data);
      const body = await res.json();

      if (res.status >= 299 || res.status < 200) {
        throw body.error;
      } else {
        history.push(`/dashboard`);
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
      <h1 className="display-2 text-center">Add Table</h1>
      <ErrorHandle />
      <form className="mt-2" onSubmit={onSubmit}>
        <div className="form-group col-md-5 col-sm-12 mx-auto">
          <label htmlFor="name">Table Name:</label>
          <input
            name="table_name"
            type="text"
            className="form-control"
            id="name"
            onChange={onChange}
            value={data.table_name}
            required
          ></input>
        </div>

        <div className="form-group col-md-5 col-sm-12 mx-auto">
          <label htmlFor="capacity">Capacity:</label>
          <input
            name="capacity"
            type="number"
            className="form-control"
            id="capacity"
            onChange={onChange}
            value={data.capacity}
            required
          ></input>
        </div>

        <div className="text-center">
          <button
            type="button"
            className="btn btn-outline-dark mr-2"
            onClick={() => history.goBack()}
          >
            Cancel
          </button>

          <button type="submit" className="btn btn-outline-danger">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
