const User = require("../models/user");
const catchAsync = require("./../utils/catchAsync");

exports.getAllbookings = catchAsync(async (req, res, next) => {
  //console.log(req.params.userId);
  const bookings = await User.findById(req.params.userId).populate(
    "advisors bookings"
  );
  // "bookings"
  // );

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    bookings,
  });
});
