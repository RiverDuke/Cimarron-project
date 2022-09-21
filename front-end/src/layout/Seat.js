import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { listTable, readReservation, updateTable } from "../utils/api";
import formatReservationDate from "../utils/format-reservation-date";
import formatReservationTime from "../utils/format-reservation-time";

export default function Seat() {
  const history = useHistory();
  const [reservation, setReservation] = useState({});
  const [reservationsError, setReservationsError] = useState(null);
  const [tables, setTables] = useState([]);
  const [data, setData] = useState(undefined);
  const { params } = useRouteMatch();

  useEffect(loadReservation, [params.reservation_id]);
  useEffect(loadTable, []);

  function loadReservation() {
    const abortController = new AbortController();
    setReservationsError(null);
    readReservation(params.reservation_id, abortController.signal)
      .then(formatReservationDate)
      .then(formatReservationTime)
      .then(setReservation)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  function loadTable() {
    const ac = new AbortController();
    listTable(ac.signal).then((res) => {
      return setTables(res);
    });
    return () => ac.abort();
  }

  function handleChange(event) {
    setData(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setReservationsError(null);

    try {
      const res = await updateTable(data, params.reservation_id);
      const body = await res.json();

      if (res.status >= 299 || res.status < 200) {
        throw body.error;
      } else {
        history.push(`/dashboard?date=${reservation.reservation_date}`);
      }
    } catch (err) {
      setReservationsError(err);
    }
  }

  function DisplayReservtion() {
    return (
      <div className=" d-flex flex-column" role="alert">
        <div className="d-flex mx-auto">
          <h4>Name:</h4>
          <h4 className="text-primary">
            &nbsp;{`${reservation.first_name} ${reservation.last_name}`}
          </h4>
        </div>
        <div className="d-flex mx-auto">
          <h4>Date:</h4>
          <h4 className="text-primary">
            &nbsp;{`${reservation.reservation_date}`}
          </h4>
        </div>
        <div className="d-flex mx-auto">
          <h4>Party of:</h4>
          <h4 className="text-primary">&nbsp;{`${reservation.people}`}</h4>
        </div>
        <div className="d-flex mx-auto">
          <h4>Time:</h4>
          <h4 className="text-primary">
            &nbsp;{`${reservation.reservation_time}`}
          </h4>
        </div>
      </div>
    );
  }

  function SeatSelect() {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group col-md-4 col-sm-4 mx-auto mt-3">
          <label htmlFor="table_id">Seat at:</label>
          <select
            name="table_id"
            className="form-control"
            id="table_id"
            onChange={handleChange}
            value={data}
            required
          >
            <option value="">-- Select a Table --</option>
            {tables.map((table) => {
              return (
                <option
                  key={table.table_id}
                  value={table.table_id}
                >{`${table.table_name} - ${table.capacity}`}</option>
              );
            })}
          </select>
        </div>
        <button
          type="button"
          className="btn btn-outline-dark mr-2"
          onClick={() => history.goBack()}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    );
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
    <div className="container mt-3 text-center">
      <h1 className=" display-3 mt-5 mb-4">Currently Seating</h1>
      <ErrorHandle />
      <DisplayReservtion />
      <SeatSelect />
    </div>
  );
}
