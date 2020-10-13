const express = require('express');
//create a router
const router = express.Router();
//users array
let users = require('../models/usersArray');

const {getAllUsers, createNewUser, findOneUser, deleteUser, updateUser} = require('../controllers/UserController')


// get all users
router.get('/all-users', getAllUsers);

// get one user based on id number
router.get('/single-user/:id', findOneUser);

router.post('/create-user', createNewUser);

router.put('/update-user/:id', updateUser);

//delete single user based on id parameter
router.delete('/delete-user/:id', deleteUser);

module.exports = router;
