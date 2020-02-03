const express = require('express');
const mainApp = express();
const mainPort = 4000;
const SchedulePort = 4002;
const MortgagePort = 4003;
const SimiliarPort = 4004;

mainApp.use(express.static('public'))

mainApp.listen(mainPort, () => {
  console.log(`Main App is listening on port ${mainPort}, only use to serve up static HTML files.`)
})