/**
 * List handler for reservation resources
 */

const service = require("./reservations.service");

function validate(req, res, next) {
  const { data } = req.body;
  const date = new Date(data.reservation_date);
  // console.log("data from payload", data);

  if (date.getDay() == 1) {
    console.log("this should show up");
    next({
      status: 400,
      message: "Restuarant is closed on Tuesdays",
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
  console.log("data posted:", data);
  res.json({ data });
}

module.exports = {
  list,
  create: [validate, create],
};
