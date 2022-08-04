const service = require("./tables.service");
const { read } = require("../reservations/reservations.service");

function validate(req, res, next) {
  if (!req.body.data) {
    next({
      status: 400,
      message: "must include data property",
    });
  }

  const table = req.body.data;

  if (!table.table_name || table.table_name.length < 2) {
    next({
      status: 400,
      message: "table_name must be at least 2 characters long",
    });
  }

  if (!table.capacity || table.capacity < 1) {
    next({
      status: 400,
      message: "Table capacity must be at least 1",
    });
  }

  if (typeof table.capacity !== "number") {
    next({
      status: 400,
      message: "Table capacity must be a number",
    });
  }
  next();
}

async function tableIdExists(req, res, next) {
  const table = await service.readTable(req.params.table_id);
  if (!table) {
    return next({
      status: 404,
      message: `table_id: ${req.params.table_id} does not exist`,
    });
  } else {
    return next();
  }
}

async function vacantCheck(req, res, next) {
  const table = await service.readTable(req.params.table_id);

  if (table.reservation_id) {
    return next();
  } else {
    return next({
      status: 400,
      message: "Table is not occupied and cannot be cleared",
    });
  }
}

async function checkData(req, res, next) {
  if (!req.body.data) {
    return next({
      status: 400,
      message: "must include data property",
    });
  }
  const { reservation_id } = req.body.data;

  if (!reservation_id) {
    return next({
      status: 400,
      message: "reservation_id property is missing",
    });
  }

  const resrvation = await read(reservation_id);
  const table = await service.readTable(req.params.table_id);

  console.log("table", table);
  console.log("resrvation", resrvation);

  if (!resrvation) {
    return next({
      status: 404,
      message: `reservation_id: ${reservation_id} does not exist`,
    });
  }

  if (resrvation.people > table.capacity) {
    return next({
      status: 400,
      message: "Party size is to large for tables capacity",
    });
  }

  if (table.reservation_id) {
    return next({
      status: 400,
      message: "Table is occupied",
    });
  }

  return next();
}

async function create(req, res, next) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

async function list(req, res, next) {
  const data = await service.list();
  res.json({ data });
}

async function update(req, res, next) {
  console.log(req.body.data);
  const data = await service.update(
    req.params.table_id,
    req.body.data.reservation_id
  );
  res.json({ data: "hello" });
}

async function destroy(req, res, next) {
  await service.destroy(req.params.table_id);
  res.sendStatus(200);
}

module.exports = {
  create: [validate, create],
  list,
  update: [checkData, update],
  destroy: [tableIdExists, vacantCheck, destroy],
};
