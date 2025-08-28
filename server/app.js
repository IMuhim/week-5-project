const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const session = require('express-session')
const path = require('path')

const loginRouter = require('./routers/logins');
const registerRouter = require('./routers/register');
const gameRouter= require('./routers/router')
const selectionRouter = require('./routers/selections')
const attemptRouter = require('./routers/attempts')


const app = express();
//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(logger);

app.use(session({
    secret: 'secret123',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 }
}));

app.use(express.static(path.join(__dirname, '../client')));

// Routes
app.use('/game', gameRouter)
app.use('/login',loginRouter)
app.use('/register',registerRouter)
app.use('/selection',selectionRouter)
app.use('/attempts',attemptRouter)

module.exports = app;
