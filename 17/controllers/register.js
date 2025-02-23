const { users } = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
  try {
    const { firstname, lastname, email, phone, username, password } = req.body;

    if (!firstname || !lastname || !email || !phone || !username || !password) {
        return res.status(400).json({ message: "Please enter all the fields" })
    }

    let getuser = await users.findOne({ "username": username })

    if (getuser != null) {
        return res.status(400).json({ message: "username is used" })
    }

    const hash = await bcrypt.hash(password, 10);
        await users.create({
        firstname,
        lastname,
        email,
        phone,
        username,
        password: hash
    });

    return res.status(200).json({ message: "Registered successfully" });
    }
    catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
    }
    }

module.exports = { register } 