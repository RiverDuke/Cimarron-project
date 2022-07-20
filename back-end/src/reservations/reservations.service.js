const { KnexTimeoutError } = require("knex");
const knex = require("../db/connection");

function list(date) {
  return knex("reservations").select("*").where({ reservation_date: date });
}

function create(newReservation) {
  return knex("reservations").insert(newReservation, "*");
}
module.exports = {
  list,
  create,
};
