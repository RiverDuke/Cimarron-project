const service = require("./reservations.service");

function validate(req, res, next) {
  const { data } = req.body;

  //date formatted to be accurately compatible with getTime()
  const date = new Date(`${data.reservation_date}T${data.reservation_time}`);
  const today = new Date();
  const day = date.getDay();

  //hours and minutes pulled from request body
  const hours = [data.reservation_time[0], data.reservation_time[1]].join("");
  const mins = [data.reservation_time[3], data.reservation_time[4]].join("");

  // 2 == Tuesday
  if (day == 2) {
    return next({
      status: 400,
      message: "Restuarant is closed on Tuesdays",
    });
  }

  if (date.getTime() < today.getTime()) {
    return next({
      status: 400,
      message: "Reservation must be in the future",
    });
  }

  if (
    hours < 10 ||
    (hours == 10 && mins < 30) ||
    hours > 21 ||
    (hours == 21 && mins > 30)
  ) {
    return next({
      status: 400,
      message: "Reservations should be made between 10:30am - 9:30pm",
    });
  }
  return next();
}

async function reservationExists(req, res, next) {
  const resrVation = await service.read(req.params.reservation_id);

  if (resrVation) {
    res.locals.resrVation = resrVation;
    return next();
  } else {
    return next({
      status: 404,
      message: `Reservation_id: ${req.params.reservation_id} does not exist`,
    });
  }
}

function dataCheck(req, res, next) {
  if (!req.body.data) {
    return next({
      status: 400,
      message: "must include data property",
    });
  }

  const {
    first_name,
    last_name,
    mobile_number,
    reservation_date,
    reservation_time,
    people,
    status,
  } = req.body.data;

  let date = new Date(reservation_date);
  let time = new Date(new Date(`${reservation_date}T${reservation_time}`));

  if (!first_name || first_name.length === 0) {
    return next({
      status: 400,
      message: "first_name must be included",
    });
  }

  if (!last_name || last_name.length === 0) {
    return next({
      status: 400,
      message: "last_name must be included",
    });
  }

  if (!mobile_number || mobile_number.length === 0) {
    return next({
      status: 400,
      message: "mobile_number must be included",
    });
  }

  if (!reservation_date || reservation_date.length === 0) {
    return next({
      status: 400,
      message: "reservation_date must be included",
    });
  }

  if (!reservation_time || reservation_time.length === 0) {
    return next({
      status: 400,
      message: "reservation_time must be included",
    });
  }

  if (!people || people === 0) {
    return next({
      status: 400,
      message: "people must be included and greater than 0",
    });
  }

  if (typeof people !== "number") {
    return next({
      status: 400,
      message: "people must be a number",
    });
  }

  if (date.toString() === "Invalid Date") {
    return next({
      status: 400,
      message: "reservation_date must be a date",
    });
  }

  if (time.toString() === "Invalid Date") {
    return next({
      status: 400,
      message: "reservation_time must be a time",
    });
  }

  if (status === "seated") {
    return next({
      status: 400,
      message: "status cannot be seated",
    });
  }

  if (status === "finished") {
    return next({
      status: 400,
      message: "status cannot be finished",
    });
  }

  return next();
}

function checkStatus(req, res, next) {
  const { status } = req.body.data;
  const { resrVation } = res.locals;

  if (resrVation.status === "finished") {
    return next({
      status: 400,
      message: "a finished reservation cannot be updated",
    });
  }

  if (status === "booked" || status === "seated" || status === "finished") {
    return next();
  }

  return next({
    status: 400,
    message: "status unknown",
  });
}

async function list(req, res) {
  if (req.query.mobile_number) {
    return res.json({
      data: await service.readNumber(req.query.mobile_number),
    });
  }

  res.json({
    data: await service.list(req.query.date),
  });
}

async function create(req, res, next) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

async function read(req, res, next) {
  const data = await service.read(req.params.reservation_id);
  res.json({ data });
}

async function statusChange(req, res, next) {
  const data = await service.statusChange(
    req.params.reservation_id,
    req.body.data.status
  );
  res.status(200).json({ data });
}

async function readByNumber(req, res, next) {}

module.exports = {
  list,
  create: [dataCheck, validate, create],
  read: [reservationExists, read],
  statusChange: [reservationExists, checkStatus, statusChange],
  readByNumber,
};
