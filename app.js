const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;
//general middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes middleware
app.use('/api/v1/users', userRoutes);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
