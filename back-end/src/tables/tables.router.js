const router = require("express").Router();
const controller = require("./tables.controller");

router.route("/").post(controller.create);

// router.route("/new");

module.exports = router;