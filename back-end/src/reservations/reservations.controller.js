/**
 * List handler for reservation resources
 */
const service = require("./reservations.service");

async function list(req, res) {
  console.log(req.query);
  res.json({
    data: await service.list(req.query.date),
  });
}

async function create(req, res, next) {
  console.log(req.body);
  res.json({ data: await service.create(req.body) });
}

module.exports = {
  list,
  create,
};
