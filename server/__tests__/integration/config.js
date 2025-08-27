const { Pool } = require("pg");
const fs = require("fs");
require("dotenv").config();

const resetSQL = fs.readFileSync(__dirname + '/reset.sql').toString();

