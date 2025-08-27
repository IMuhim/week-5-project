
const Logins = require("../models/User");

async function login(req,res) {
    try {
        const {email, password} = req.body

        const user = await Logins.login({email, password})
        res.status(200).json({'message':'login successful',user})
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
}

module.exports = {
    login
}