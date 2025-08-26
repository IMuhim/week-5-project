const Logins = require("../models/Logins");

async function show(req,res) {
    try {
        console.log(req);
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
}

module.exports = {
    create
}