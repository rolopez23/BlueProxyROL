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

const mainPort = 4000;



mainApp.use(morgan('combined'));

mainApp.get('/mortgageApp/*', (req, res) => {
  const path = '/dist/bundle.js';
  proxyServer.redirect(req, res, routes.MortgageBucket, path);

});

mainApp.get('/scheduleTour/*', (req, res) => {
  console.log('AWS Request');
  proxyServer.redirect(req, res, routes.ScheduleBucket, '/bundle.js');
});

mainApp.get('/similiarHomes/*', (req, res) => {

  // proxyServer.redirect(req, res, AWS);
  const path = '/dist/bundle.js';
  proxyServer.redirect(req, res, routes.SimiliarBucket, path);

});


mainApp.use(express.static(path.join(__dirname, '..', 'public')));



mainApp.get('/mortgage:listingId', (req, res) => {
  console.log('MortgageRequest');
  proxyServer.redirect(req, res, MortgageBucket);
});

mainApp.get('/house', (req, res) => {
  console.log('house');
  proxyServer.redirect(req, res, ScheduleBucket);
});

mainApp.get('/similar-listings', (req, res) => {
  console.log('Similar Homes Request');
  proxyServer.redirect(req, res, SimiliarBucket);
});

mainApp.listen(mainPort, () => {
  console.log(`Main App is listening on port ${mainPort}, only use to serve up static HTML files.`);
});