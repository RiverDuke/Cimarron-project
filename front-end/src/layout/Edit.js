import { ReservationForm } from "./NewReservation";
import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { readReservation, updateReservation } from "../utils/api";
import formatReservationDate from "../utils/format-reservation-date";
import { ErrorHandle } from "./NewReservation";

export default function Edit() {
  const [reservationsError, setReservationsError] = useState(null);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: "",
  });
  const { params } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    const ac = new AbortController();
    async function loadReservation() {
      const response = await readReservation(params.reservation_id, ac.signal);
      const {
        first_name,
        last_name,
        mobile_number,
        reservation_date,
        reservation_time,
        people,
      } = await formatReservationDate(response);

      setData(() => {
        return {
          first_name,
          last_name,
          mobile_number,
          reservation_date,
          reservation_time,
          people,
        };
      });
    }

    loadReservation();
    return () => ac.abort();
  }, [params.reservation_id]);

  function onChange({ target }) {
    setData({
      ...data,
      [target.name]: target.value,
    });
  }

  async function onSubmit(event) {
    event.preventDefault();
    setReservationsError(null);
    try {
      const res = await updateReservation(params.reservation_id, data);
      const body = await res.json();

      console.log(body.error);

      if (res.status >= 299 || res.status < 200) {
        throw body.error;
      } else {
        history.push(`/dashboard?date=${data.reservation_date}`);
      }
    } catch (err) {
      console.log("err", err);
      setReservationsError(err);
    }
  }

  return (
    <div className="container mt-3 mb-5">
      <h1 className="display-3 text-center mt-5 mb-5">Edit Reservation</h1>
      <div className="mt-5 mb-5">
        <ErrorHandle error={reservationsError} />
      </div>

      <ReservationForm onChange={onChange} data={data} onSubmit={onSubmit} />
    </div>
  );
}
