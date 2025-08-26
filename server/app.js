const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");

const loginRouter = require('./routers/logins');


const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

// app.use("/", ...Router)

app.use('/login',loginRouter)

module.exports = app;
