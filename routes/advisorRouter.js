const express = require("express");
const bookingController = require("./../controllers/bookingController");
const advisorController = require("./../controllers/advisorcontroller");
const router = express.Router({ mergeParams: true });
router.route("/booking/").get(bookingController.getAllbookings);
router.route("/").get(advisorController.getAlladvisors);
router
  .route("/:advisorId")
  .get(advisorController.getAdvisor)
  .post(advisorController.createBooking);
module.exports = router;
