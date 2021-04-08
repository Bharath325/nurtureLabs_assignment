const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  advisor: {
    type: mongoose.Schema.ObjectId,
    ref: "advisors",
  },

  booking_time: {
    type: Date,
    default: Date.now,
  },
});
bookingSchema.pre("save", function (next) {
  now = new Date();
  this.booking_time = now;
  if (!this.booking_time) {
    this.booking_time = now;
  }
  next();
});
const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;
