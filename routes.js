const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

//handles the post and get All data requests
router.route("/").get(controllers.getAllData).post(controllers.createNewData);

//handles the update data, get data and delete data for a specific data
router
  .route("/:id")
  .get(controllers.getData)
  .patch(controllers.updateData)
  .delete(controllers.deleteData);

module.exports = router;
