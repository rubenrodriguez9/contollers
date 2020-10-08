const express = require('express');
//create a router
const router = express.Router();
//users array
const users = require('../models/usersArray');

// get all users
router.get('/all-users', (req, res) => {
  return res.status(200).json({ confirmation: 'success', users });
});

// get one user based on id number
router.get('/single-user/:id', (req, res) => {
  let foundUser = users.filter((user) => {
    if (user.id === req.params.id) {
      return res.status(200).json({ confirmation: 'success', user });
    }
  });
  if (!foundUser.length)
    return res
      .status(400)
      .json({ confirmation: 'fail', message: 'User Does Not Exist' });
});

router.post('/create-user', (req, res) => {
  //create a new user object
  const newUser = {};

  //values for newUser based on req.body inputs in postman
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.id = String(users.length + 1);

  res.send(newUser);
});

module.exports = router;
