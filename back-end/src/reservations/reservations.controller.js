/**
 * List handler for reservation resources
 */
async function list(req, res) {
  res.json({
    data: [],
  });
}

async function create(req, res, next) {
  res.json({ data: "hellot" });
}

module.exports = {
  list,
  create,
};
