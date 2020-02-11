// Package Dependencies
const express = require('express');
const morgan = require('morgan');
const path = require('path');


// File Dependencies
const proxy = require('./proxyServer/');
const routes = require('./routes.js');

// Express
const mainApp = express();

// MiddleWare
const proxyServer = new proxy.Server;
mainApp.use(morgan('combined'));

//Port
const mainPort = 4000;

mainApp.use(express.static(path.join(__dirname, '..', 'public')));

mainApp.get('/mortgageApp/*', (req, res) => {
  const path = '/dist/bundle.js';
  // console.log('mortgageRequest', routes.MortgageBucket)
  proxyServer.redirect(req, res, routes.MortgageBucket, path);
});

mainApp.get('/scheduleTour/*', (req, res) => {
  console.log('ScheduleTour',routes.AWS);
  proxyServer.redirect(req, res, routes.AWS);
});

mainApp.get('/similiarHomes/*', (req, res) => {
  const path = '/dist/bundle.js';
  proxyServer.redirect(req, res, routes.SimiliarBucket, path);

});




mainApp.get('/mortgage:listingId', (req, res) => {
  console.log('MortgageRequest');
  proxyServer.redirect(req, res, routes.MortgageBucket);
});

mainApp.get('/house', (req, res) => {
  console.log('house');
  proxyServer.redirect(req, res, routes.ScheduleBucket);
});

mainApp.get('/similar-listings', (req, res) => {
  console.log('Similar Homes Request');
  proxyServer.redirect(req, res, routes.SimiliarBucket);
});

mainApp.listen(mainPort, () => {
  console.log(`Main App is listening on port ${mainPort}, only use to serve up static HTML files.`);
});