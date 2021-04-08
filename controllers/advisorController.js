const Booking = require("../models/booking");
const User = require("../models/user");
const Advisor = require("./../models/advisor");

const catchAsync = require("./../utils/catchAsync");

exports.createAdvisor = catchAsync(async (req, res, next) => {
  const newAdvisor = await Advisor.create(req.body);
  res.status(200).json({
    status: "success",
  });
});

exports.getAlladvisors = catchAsync(async (req, res, next) => {
  //const advisor = await Advisor.find();
  //console.log(req.params.userId);
  const advisor = await User.findById(req.params.userId).populate("advisors");

  // SEND RESPONSE
  res.status(200).json({
    status: "success",

    data: {
      advisor: advisor.advisors,
    },
  });
});

exports.getAdvisor = catchAsync(async (req, res, next) => {
  const advisor = await Advisor.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      advisor,
    },
  });
});

exports.createBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.create(req.body);
  res.status(200).json({
    status: "success",

    data: {
      user: req.params.userId,
      advisor: req.params.advisorId,
      bookingid: booking.id,
      bookingtime: booking.booking_time,
    },
  });
});
