const service = require("./tables.service")

async function create(req, res, next) {
    const data = await service.create(req.body.data);
    res.json({ data });
  }


module.exports = {
    create
}