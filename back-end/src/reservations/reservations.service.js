const { response } = require("express");
const knex = require("../db/connection");

function list(date) {
  return knex("reservations")
    .select("*")
    .where({ reservation_date: date })
    .whereNot({ status: "finished" })
    .whereNot({ status: "cancelled" })
    .orderBy("reservation_time");
}

function create(newReservation) {
  return knex("reservations")
    .insert(newReservation, "*")
    .then((data) => data[0]);
}

function read(Id) {
  return knex("reservations").select("*").where({ reservation_id: Id }).first();
}

function statusChange(Id, status) {
  return knex("reservations")
    .update({ status: status })
    .where({ reservation_id: Id })
    .then(() => {
      return { status };
    });
}

function readNumber(mobile_number) {
  return knex("reservations")
    .whereRaw(
      "translate(mobile_number, '() -', '') like ?",
      `%${mobile_number.replace(/\D/g, "")}%`
    )
    .orderBy("reservation_date");
}

function update(Id, reservation) {
  return knex("reservations")
    .update(reservation, "*")
    .where({ reservation_id: Id })
    .then((response) => response[0]);
}

module.exports = {
  list,
  create,
  read,
  statusChange,
  readNumber,
  update,
};
