import React, { useEffect, useState } from "react";
import {
  clearTable,
  listReservations,
  listTable,
  reservationStatusChange,
} from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import { next, today, previous } from "../utils/date-time";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "../css/dashboard.css";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */

function SeatBtnDisplay({ reservation }) {
  const history = useHistory();
  if (reservation.status === "booked") {
    return (
      <>
        <td style={{ borderStyle: "hidden", padding: "0" }}>
          <Link
            to={`/reservations/${reservation.reservation_id}/seat`}
            type="button"
            className="btn btn-outline-danger red-button-outline m-1 ml-3"
            href={`/reservations/${reservation.reservation_id}/seat`}
          >
            Seat
          </Link>
        </td>
        <td style={{ borderStyle: "hidden", padding: "0" }}>
          <Link
            to={`/reservations/${reservation.reservation_id}/edit`}
            type="button"
            className="btn btn-outline-danger red-button-outline m-1 ml-3"
            href={`/reservations/${reservation.reservation_id}/edit`}
          >
            Edit
          </Link>
        </td>
        <td style={{ borderStyle: "hidden", padding: "0" }}>
          <button
            type="button"
            className="btn btn-outline-danger red-button-outline m-1 ml-3"
            data-reservation-id-cancel={reservation.reservation_id}
            onClick={async () => {
              if (window.confirm("Do you want to cancel this reservation?")) {
                await reservationStatusChange(
                  reservation.reservation_id,
                  "cancelled"
                );
                history.go(0);
              } else {
                console.log("goodbye");
              }
            }}
          >
            Cancel
          </button>
        </td>
      </>
    );
  } else {
    return (
      <>
        <td style={{ borderStyle: "hidden" }}></td>
        <td style={{ borderStyle: "hidden" }}></td>
        <td style={{ borderStyle: "hidden" }}></td>
      </>
    );
  }
}

export function ResrVation({ reservations, loadDashboard }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        {reservations.map((reservation) => {
          return (
            <tbody key={reservation.reservation_id}>
              <tr>
                <td>{reservation.first_name}</td>
                <td>{reservation.last_name}</td>
                <td>{reservation.mobile_number}</td>
                <td>{reservation.reservation_date}</td>
                <td>{reservation.reservation_time}</td>
                <td data-reservation-id-status={reservation.reservation_id}>
                  {reservation.status}
                </td>

                <SeatBtnDisplay
                  reservation={reservation}
                  loadDashboard={loadDashboard}
                />
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default function Dashboard({ date }) {
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
      <div className="d-flex row mb-4 justify-content-center">
        {/* <h4 className="ml-1 display-4">{date}</h4> */}
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-outline-danger red-button-outline"
            onClick={() => {
              history.push(`/dashboard?date=${previous(date)}`);
            }}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => {
              history.push(`/dashboard?date=${today()}`);
            }}
          >
            Today
          </button>
          <button
            type="button"
            className="btn btn-outline-danger red-button-outline"
            onClick={() => {
              history.push(`/dashboard?date=${next(date)}`);
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  function Tables() {
    return (
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">Table Id</th> */}
            <th scope="col">Table Name</th>
            <th scope="col">Capacity</th>
            <th scope="col">Availablity</th>
          </tr>
        </thead>
        {tables.map((table) => {
          function Finish() {
            if (table.reservation_id) {
              return (
                <td style={{ borderStyle: "hidden", padding: "0" }}>
                  <button
                    type="button"
                    className="btn btn-outline-danger red-button-outline m-1 ml-3"
                    data-table-id-finish={table.table_id}
                    onClick={async () => {
                      if (
                        window.confirm(
                          "Is this table ready to seat new guests? \n \n This cannont be undone."
                        )
                      ) {
                        try {
                          setReservationsError(null);
                          await clearTable(table.table_id);
                          loadTable();
                          loadDashboard();
                        } catch (err) {
                          setReservationsError(err);
                        }
                      } else {
                      }
                    }}
                  >
                    Finished Eating
                  </button>
                </td>
              );
            } else {
              return <td style={{ borderStyle: "hidden" }}></td>;
            }
          }
          return (
            <tbody key={table.table_id}>
              <tr>
                <td>{table.table_name}</td>
                <td>{table.capacity}</td>
                <td
                  data-table-id-status={table.table_id}
                  style={{ paddingLeft: "36px" }}
                >
                  {table.reservation_id ? "Occupied" : "Free"}
                </td>
                <Finish />
              </tr>
            </tbody>
          );
        })}
      </table>
    );
  }

  return (
    <main className="container mt-3">
      <h1 className="d-block text-center display-3 mb-5 mt-5">
        Manage Reservations
      </h1>

      <div className="d-md-flex mb-3 flex-column text-center">
        <h4 className="mb-0 mt-2">Display reservations by date</h4>
        <h4 className="display-4 mb-2" style={{ fontSize: "55px" }}>
          {date}
        </h4>
      </div>

      <DateDisplay />

      <div className="">
        <ErrorAlert error={reservationsError} />
        <div className="p-3 mb-4 overflow-auto">
          <h3 className="text-center mt-3">Reservation List</h3>
          <ResrVation
            reservations={reservations}
            loadDashboard={loadDashboard}
          />
        </div>

        <div className="p-3 overflow-auto">
          <h3 className="text-center">Table Availablity</h3>
          <Tables />
        </div>
        <div className="book-button text-center">
          <Link className=" btn btn-danger red-button btn-lg" to="/search">
            Search Reservations
          </Link>
        </div>
      </div>
    </main>
  );
}
