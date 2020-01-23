const express = require('express');
const mainApp = express();
const mainPort = 3000;

mainApp.use(express.static('public'))

mainApp.listen(mainPort, () => {
  console.log(`Main App is listening on port ${mainPort}, only use to serve up static HTML files.`)
})