const express = require("express");
const adminRouter = require("./routes/adminRouter");
const userRouter = require("./routes/userRouter");
const app = express();

app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
module.exports = app;
