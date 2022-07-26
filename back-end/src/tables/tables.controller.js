const service = require("./tables.service");

function validate(req, res, next) {
  console.log(req.body.data);
  const table = req.body.data;

  if (table.table_name.length < 2) {
    next({
      status: 400,
      message: "Table name must be at least 2 characters long",
    });
  }

  if (table.capacity < 1) {
    next({
      status: 400,
      message: "Table capacity must be at least 1",
    });
  }

  next();
}

async function create(req, res, next) {
  const data = await service.create(req.body.data);
  res.json({ data });
}

module.exports = {
  create: [validate, create],
};
