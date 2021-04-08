const express = require("express");
const router = express.Router();
const advisorController = require("./../controllers/advisorcontroller");

router.route("/advisor").post(advisorController.createAdvisor);
module.exports = router;
