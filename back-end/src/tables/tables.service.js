const knex = require("../db/connection");

function create(newTable) {
  return knex("tables")
    .insert(newTable, "*")
    .then((data) => data[0]);
}

function list() {
  return knex("tables").select("*").orderBy("table_name");
}

function update(tableId, reservationId) {
  return knex("tables")
    .update({ reservation_id: reservationId })
    .where({ table_id: tableId })
    .then(() => {
      return knex("reservations")
        .update({ status: "seated" })
        .where({ reservation_id: reservationId });
    });
}

function readTable(tableId) {
  return knex("tables").select("*").where({ table_id: tableId }).first();
}

function destroy(Id) {
  return knex("tables")
    .select("reservation_id")
    .where({ table_id: Id })
    .first()
    .then(({ reservation_id }) => {
      return knex("reservations")
        .update({ status: "finished" })
        .where({ reservation_id: reservation_id });
    })
    .then(() => {
      return knex("tables")
        .update({ reservation_id: null })
        .where({ table_id: Id });
    });
}

module.exports = {
  create,
  list,
  update,
  readTable,
  destroy,
};
