const bcrypt = require('bcrypt')
const Register = require("../models/User");

async function register(req,res) {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await Register.register({email,password:hashedPassword,name})
        res.status(201).json({'message':'User registered', user:newUser})
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
}

module.exports = {
    register
}