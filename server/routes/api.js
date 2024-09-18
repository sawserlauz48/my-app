const express = require("express");
const router = express.Router();
const itemRouter = require("./api/items");
const userRouter = require("./api/users");

router.use("/items", itemRouter);

router.use("/users", userRouter);

module.exports = router