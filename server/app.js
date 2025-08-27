const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");

const gameRouter = require('./routers/router');


const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

// app.use("/", ...Router)

app.use('/game', gameRouter)

module.exports = app;
