const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
const bookingController = require("./../controllers/bookingController");
router.route("/:userId/advisor/booking").get(bookingController.getAllbookings);

const advisorRoute = require("./advisorRouter");

router.use("/:userId/advisor", advisorRoute);
router.route("/register").post(userController.createUser);
router.route("/register/:id").patch(userController.updateUser);
router.route("/login").post(userController.loginUser);
router.route("/logout").get(userController.logout);

module.exports = router;
