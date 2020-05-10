var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var dbConfig = require('./config/dbConfig');
// var connection;

// // Create a new MongoClient
client = new MongoClient(dbConfig.url, {useUnifiedTopology: true});

client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  app.locals.connection = client.db(dbConfig.dbName);
//   client.close();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
