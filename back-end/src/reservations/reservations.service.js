const knex = require("../db/connection");

function list(date) {
  return knex("reservations")
    .select("*")
    .where({ reservation_date: date })
    .whereNot({ status: "finished" })
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

module.exports = {
  list,
  create,
  read,
  statusChange,
};
