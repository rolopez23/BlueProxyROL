/* eslint-disable no-console */
const express = require('express');

const mainApp = express();
const path = require('path');
const morgan = require('morgan');

const mainPort = 3002;

const db = require('../db/index.js');

mainApp.use(express.static(path.join(__dirname, '../public')));
mainApp.use(morgan('dev'));
mainApp.use(express.json());

mainApp.get('/house', (req, res) => {
  const q = (req.query);
  const id = q.listingId;
  db.getData(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

mainApp.post('/schedule', (req, res) => {
  // for testing the front end... no added functionality yet
  console.log(req.body);
  res.send(req.body);
});

mainApp.listen(mainPort, () => {
  console.log(`APP is listening on port ${mainPort}`);
});

// for testing suite
module.exports = mainApp;
