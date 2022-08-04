const router = require("express").Router();
const controller = require("./tables.controller");

router.route("/").post(controller.create).get(controller.list);

router
  .route("/:table_id/seat")
  .put(controller.update)
  .delete(controller.destroy);

module.exports = router;
