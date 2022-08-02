const knex = require("../db/connection");

function list(date) {
  return knex("reservations")
    .select("*")
    .where({ reservation_date: date })
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

module.exports = {
  list,
  create,
  read,
};
