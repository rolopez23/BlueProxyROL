const express = require('express');
const morgan = require('morgan');
const httpProxy = require('http-proxy');
const axios = require('axios');
const path = require('path');

const proxy = require('./proxyServer/');

var apiProxy = httpProxy.createProxyServer();

const mainApp = express();

const proxyServer = new proxy.Server;

const MortgageBucket = 'http://13.52.171.152:4003';
const SimiliarBucket = 'http://18.144.115.157:4004';
const ScheduleBucket = 'http://52.52.152.21:3002';
const mainPort = 4000;


const AWS = 'https://bluefinrol.s3-us-west-1.amazonaws.com';


mainApp.use(morgan('combined'));

mainApp.get('/mortgageApp/*', (req, res) => {
  const path = '/dist/bundle.js';
  proxyServer.redirect(req, res, MortgageBucket, path);

});

mainApp.get('/scheduleTour/*', (req, res) => {
  console.log('AWS Request');
  proxyServer.redirect(req, res, ScheduleBucket, '/bundle.js');
});

mainApp.get('/similiarHomes/*', (req, res) => {

  // proxyServer.redirect(req, res, AWS);
  const path = '/dist/bundle.js';
  proxyServer.redirect(req, res, SimiliarBucket, path);

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
  // axios.get('http://18.144.115.157:4004/similar-listings')
  //   .then((response) => {
  //     res.send(response.data);
  //   });
});

mainApp.listen(mainPort, () => {
  console.log(`Main App is listening on port ${mainPort}, only use to serve up static HTML files.`);
});