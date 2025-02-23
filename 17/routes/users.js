const express = require('express');
const router = express.Router();

const { verify } = require('../middleWare/verify');

const { changePassword } = require('../controllers/ChangePassword');
const { deleteUser } = require('../controllers/DeleteUser');
const { allUsers } = require('../controllers/allusers');

router.put('/change-password', verify, changePassword);
router.delete('/delete-user', verify, deleteUser);
router.get('/all-users', verify, allUsers);

module.exports = router;
