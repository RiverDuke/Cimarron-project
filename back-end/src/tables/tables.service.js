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
    .where({ table_id: tableId });
}

function readTable(tableId) {
  return knex("tables").select("*").where({ table_id: tableId }).first();
}

module.exports = {
  create,
  list,
  update,
  readTable,
};
