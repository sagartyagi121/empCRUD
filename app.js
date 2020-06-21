
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const employee = require('./routes/employee.routes'); // Imports routes for the products
require('dotenv').config();

// initialize our express app
const app = express();

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/employee', employee);

// Set up mongoose connection
const DBUSER = process.env.DBUSER;
const DBPWD = process.env.DBPWD;
//let dev_db_url = "mongodb+srv://GajenderTyagi:pixere123@cluster0-vv8kq.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const dev_db_url = `mongodb+srv://${DBUSER}:${DBPWD}@cluster0-vv8kq.gcp.mongodb.net/CRUDAPPDB?retryWrites=true&w=majority`;
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let port = 1234;

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});
