const { users } = require('../models/users')
const bcrypt = require('bcrypt');

const changePassword = async (req, res) => {
    const { username, password, conform_password } = req.body;
    if (!username || !password || !conform_password) {
        return res.status(400).json({ message: "Please enter all the fields" })
    }

    const getuser = await users.findOne({ "username": username })

    if (getuser === null) {
        return res.status(400).json({ message: "user not find..." })
    }

    if (password !== conform_password) {
        return res.status(400).json({ message: "password not match......." })
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "password must be at least 6 characters......." })
    }
    const hash = await bcrypt.hash(password, 10)
    getuser.password = hash
    await getuser.save()

    return res.status(200).json({ message: "password changed successfully" });

}

module.exports = { changePassword }