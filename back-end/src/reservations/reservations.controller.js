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
    next({
      status: 400,
      message: "Restuarant is closed on Tuesdays",
    });
  }

  if (date.getTime() < today.getTime()) {
    next({
      status: 400,
      message: "Reservation must be in the future",
    });
  }

  if (
    hours < 10 ||
    (hours === 10 && mins < 30) ||
    hours > 21 ||
    (hours === 21 && mins > 30)
  ) {
    next({
      status: 400,
      message: "Reservations should be made between 10:30am - 9:30pm",
    });
  }
  next();
}

async function list(req, res) {
  res.json({
    data: await service.list(req.query.date),
  });
}

async function create(req, res, next) {
  const data = await service.create(req.body.data);
  res.json({ data });
}

module.exports = {
  list,
  create: [validate, create],
};
