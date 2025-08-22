const express = require("express");
const cors = require("cors");

// const router require here
const logger = require("./middleware/logger");

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

// app.use("/", ...Router)

module.exports = app;
