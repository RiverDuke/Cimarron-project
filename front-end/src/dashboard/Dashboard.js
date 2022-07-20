import React, { useEffect, useState } from "react";
import { listReservations } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import { next, today, previous } from "../utils/date-time";
import { useHistory } from "react-router";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */

function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  // const [date, setDate] = useState(today());
  const history = useHistory();

  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    console.log("hello");
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  console.log(date);
  console.log(next(date));

  function DateDisplay() {
    return (
      <div className="row">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            history.push(`/dashboard?date=${previous(date)}`);
          }}
        >
          Success
        </button>
        <h4>{date}</h4>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            history.push(`/dashboard?date=${next(date)}`);
          }}
        >
          Success
        </button>
      </div>
    );
  }

  function Table() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Reservation Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          {reservations.map((reservation) => {
            return (
              <tbody key={reservation.reservation_id}>
                <tr>
                  <th scope="row">{reservation.reservation_id}</th>
                  <td>{reservation.first_name}</td>
                  <td>{reservation.last_name}</td>
                  <td>{reservation.mobile_number}</td>
                  <td>{reservation.reservation_date}</td>
                  <td>{reservation.reservation_time}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Reservations for date</h4>
      </div>
      <ErrorAlert error={reservationsError} />
      <DateDisplay />
      <Table />
    </main>
  );
}

export default Dashboard;
