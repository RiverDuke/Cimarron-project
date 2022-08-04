import { ReservationForm } from "./NewReservation";
import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  readReservation,
  reservationStatusChange,
  updateReservation,
} from "../utils/api";
import formatReservationDate from "../utils/format-reservation-date";

export default function Edit() {
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

  useEffect(loadReservation, []);

  function onChange({ target }) {
    setData({
      ...data,
      [target.name]: target.value,
    });
  }

  async function loadReservation() {
    const response = await readReservation(params.reservation_id);
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

  async function onSubmit(event) {
    console.log("hello");
    event.preventDefault();
    const updated = await updateReservation(params.reservation_id, data);
    console.log(updated);
    history.push(`/dashboard?date=${data.reservation_date}`);
  }
  console.log(data);
  return (
    <>
      <h1>Edit Reservation</h1>
      <ReservationForm onChange={onChange} data={data} onSubmit={onSubmit} />
    </>
  );
}
