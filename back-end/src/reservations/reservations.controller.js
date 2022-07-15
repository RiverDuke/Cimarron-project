/**
 * List handler for reservation resources
 */
const service = require("./reservations.service");

async function list(req, res) {
  const val = await service.list();
  console.log(val);
  res.json({
    data: await service.list(),
  });
}

async function create(req, res, next) {
  console.log(req.body);
  res.json({ data: "hello" });
}

module.exports = {
  list,
  create,
};
