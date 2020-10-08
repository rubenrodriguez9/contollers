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
  //validate inputs
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ confirmation: 'fail', message: 'All Inputs Must Be filled' });
  }

  //check if user exists
  let existingUser = users.filter((user) => user.email === req.body.email);
  if (existingUser.length) {
    return res.status(400).send('User Already Exists');
  }

  //create a new user object
  const newUser = {};

  //values for newUser based on req.body inputs in postman
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.id = String(users.length + 1);
  // add user to array
  users.push(newUser);
  //return the new user
  return res.status(200).json({ confirmation: 'sucess', newUser });
});

module.exports = router;
