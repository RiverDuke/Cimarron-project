const knex = require("../db/connection");

function create(newTable) {
    return knex("tables")
      .insert(newTable, "*")
      .then((data) => data[0]);
}


module.exports = {
    create
}