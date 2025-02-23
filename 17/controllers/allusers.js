const { users } = require('../models/users')

const allUsers = async (req, res) => {
    const allusers = await users.find()
    return res.json(allusers)
}

module.exports = { allUsers }