/*
 * server.js
 *
 * define environment for express server
 */

// require
const express = require('express');
const bodyParser = require('body-parser');

// server
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

//----------------------
// App Config

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


//----------------------
// final steps

// init routes
// commonRoute(router);

// root
app.use('/', express.static('public'));

// base
app.use('/api/v1', router);

app.listen(port);

module.exports = app;
