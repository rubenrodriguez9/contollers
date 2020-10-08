const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

const logger = require('./middlewares/logger');

const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
// app.use(logger);

let users = [
  { id: '1', name: 'jd', email: 'jd@me.com', password: '123' },
  { id: '2', name: 'paul', email: 'paul@me.com', password: '123' },
  { id: '3', name: 'lois', email: 'lois@me.com', password: '123' },
  { id: '4', name: 'sidney', email: 'sidney@me.com', password: '123' },
  { id: '5', name: 'canton', email: 'canton@me.com', password: '123' }
];

app.get('/', (req, res) => {
  res.status(200).json({ confirmation: 'success', users });
});

app.get('/user/:id', (req, res) => {
  users.filter((user) => {
    if (user.id === req.params.id) {
      return res.status(200).json({ user });
    } else {
      return res.status(400).send('User Does Not Exist');
    }
  });

  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
