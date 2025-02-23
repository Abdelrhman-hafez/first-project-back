const { users } = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
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
    const ACCESSTOKEN = await jwt.sign(
        {
            UserInfo: {
                id: getuser._id
            }
        },
        process.env.ACCESS_TOKEN,
        { expiresIn: "5m" }
    );
    const REFRESHTOKEN = await jwt.sign(
        {
            UserInfo: {
                id: getuser._id
            }
        },
        process.env.REFRESH_TOKEN,
        { expiresIn: "7d" }
    );

    res.cookie("jwt", REFRESHTOKEN, {
        httpOnly: true,
        secure: true,
        satisfies: "None",
        maxAge: 1000 * 60 * 60 * 24 * 7
    });

    return res.status(200).json({ message: "Login successfully", ACCESSTOKEN });

}

module.exports = { login }