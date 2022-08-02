import React, { useEffect, useState } from "react";
import { listReservations, listTable } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import { next, today, previous } from "../utils/date-time";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */

function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const [tables, setTables] = useState([]);
  const history = useHistory();

  useEffect(loadDashboard, [date]);
  useEffect(loadTable, []);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  function loadTable() {
    listTable().then((res) => setTables(res));
  }

  function DateDisplay() {
    return (
      <div className="d-flex row mb-2">
        <button
          type="button"
          className="btn btn-info ml-3"
          onClick={() => {
            history.push(`/dashboard?date=${previous(date)}`);
          }}
        >
          Previous
        </button>
        <h4 className="ml-1">{date}</h4>
        <button
          type="button"
          className="btn btn-info ml-1"
          onClick={() => {
            history.push(`/dashboard?date=${next(date)}`);
          }}
        >
          Next
        </button>
        <button
          type="button"
          className="btn btn-warning ml-auto mr-3"
          onClick={() => {
            history.push(`/dashboard?date=${today()}`);
          }}
        >
          Today
        </button>
      </div>
    );
  }

  function ResrVation() {
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
                  <td style={{ borderTop: "0" }}>
                    <Link
                      to={`/reservations/${reservation.reservation_id}/seat`}
                      type="button"
                      className="btn btn-info "
                      href={`/reservations/${reservation.reservation_id}/seat`}
                    >
                      Seat
                    </Link>
                  </td>
                  <td style={{ borderTop: "0" }}>
                    <button
                      type="button"
                      className="btn btn-info "
                      href={`/reservations/${reservation.reservation_id}`}
                    >
                      Edit
                    </button>
                  </td>
                  <td style={{ borderTop: "0" }}>
                    <button
                      type="button"
                      className="btn btn-info "
                      href={`/reservations/${reservation.reservation_id}`}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }

  function Tables() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Table Id</th>
              <th scope="col">Table Name</th>
              <th scope="col">Capacity</th>
              <th scope="col">Availablity</th>
            </tr>
          </thead>
          {tables.map((table) => {
            return (
              <tbody key={table.table_id}>
                <tr>
                  <th scope="row">{table.table_id}</th>
                  <td>{table.table_name}</td>
                  <td>{table.capacity}</td>
                  <td
                    data-table-id-status={table.table_id}
                    style={{ paddingLeft: "36px" }}
                  >
                    {table.reservation_id ? "Occupied" : "Free"}
                  </td>
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

      <div className="border bg-light p-3 border-dark mb-4 overflow-auto">
        <DateDisplay />
        <ResrVation />
      </div>

      <div className="border bg-light p-3 border-dark overflow-auto">
        <Tables />
      </div>

      <ErrorAlert error={reservationsError} />
    </main>
  );
}

export default Dashboard;
