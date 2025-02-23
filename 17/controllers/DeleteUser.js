const { users } = require('../models/users')
const bcrypt = require('bcrypt');

const deleteUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Please enter all the fields" })
    }

    const getuser = await users.findOne({ "username": username })

    if (getuser === null) {
        return res.status(400).json({ message: "user not find..." })
    }

    const match = await bcrypt.compare(password, getuser.password);

    if (!match) {
        return res.status(400).json({ message: "Wrong password......." })
    }
    await users.deleteOne({ "username": username });
    return res.status(200).json({ message: "Deleted successfully" });

}

module.exports = { deleteUser }