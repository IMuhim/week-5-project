const Logins = require("../models/Logins");

async function create(req,res) {
    try {
        
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
}

module.exports = {
    create
}