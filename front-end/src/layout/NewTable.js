import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createTable } from "../utils/api";
import tablePic from "../images/table-layout-1.png";

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
      <h1 className="display-2 text-center mt-5" style={{ fontSize: "70px" }}>
        Add Table
      </h1>
      <ErrorHandle />
      <div className="row mt-4">
        <img
          src={tablePic}
          className="col-12 col-md-6"
          alt="Table-Layout"
        ></img>
        <div className="col-12 col-md-6">
          <form className="" onSubmit={onSubmit}>
            <div className="form-group col-md-8 col-sm-12 mx-auto">
              <label htmlFor="name">
                <h4 className="m-0 font-weight-light mt-4">Table Name:</h4>
              </label>
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

            <div className="form-group col-md-8 col-sm-12 mx-auto">
              <label htmlFor="capacity">
                <h4 className="m-0 font-weight-light">Capacity:</h4>
              </label>
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
                className="btn btn-outline-dark mr-2 mt-3 gray-btn"
                onClick={() => history.goBack()}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-outline-danger red-button-outline mt-3"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="mt-4 text-center font-italic">
            *Clicking submit creates a table that allows guests to be seated at
            said table (see Manage Reservations to seat guests)
          </p>
        </div>
      </div>
    </div>
  );
}
