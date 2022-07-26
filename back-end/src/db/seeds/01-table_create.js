

exports.seed = function (knex) {
  return knex.raw("TRUNCATE TABLE tables RESTART IDENTITY CASCADE").then(() =>
    knex("tables").insert([
      { table_name: "Bar_1", capacity: 1 },
      { table_name: "Bar_2", capacity: 1 },
      { table_name: "Table_1", capacity: 6 },
      { table_name: "Table_2", capacity: 6 },
    ])
  );
};
