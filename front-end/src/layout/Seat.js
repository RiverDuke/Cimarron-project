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
      console.log(res);
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
      <div className="alert alert-success mt-3" role="alert">
        <div className="d-flex justify-content-center ">
          <h4 className="mr-3 my-auto">{`Reservation Id: #${reservation.reservation_id}`}</h4>
          <h4 className="ml-3 my-auto">{`Name: ${reservation.first_name} ${reservation.last_name}`}</h4>
        </div>
        <hr />
        <div className="d-flex justify-content-around ">
          <h4 className="my-auto">{`Date: ${reservation.reservation_date}`}</h4>
          <h4 className="my-auto">{`Party of: ${reservation.people}`}</h4>
          <h4 className="my-auto">{`Time: ${reservation.reservation_time}`}</h4>
        </div>
      </div>
    );
  }

  function SeatSelect() {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="table_id">Seat at:</label>
          <select
            name="table_id"
            className="form-control"
            id="table_id"
            onChange={handleChange}
            value={data}
            required
          >
            <option value="">-- Select an Option --</option>
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
          className="btn btn-dark mr-2"
          onClick={() => history.goBack()}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-success">
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
    <>
      <h1 className="text-center">Currently Seating</h1>
      <ErrorHandle />
      <DisplayReservtion />
      <SeatSelect />
    </>
  );
}
