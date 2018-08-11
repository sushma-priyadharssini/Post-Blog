const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

//setup express app
const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

//connect to mongodb
mongoose.connect('mongodb://localhost/posts');
mongoose.Promise = global.Promise;

//initialize routes
app.use('', routes);

//listen for requests
app.listen(process.env.port || 4000, function () {
  console.log('listening for requests...');
});
