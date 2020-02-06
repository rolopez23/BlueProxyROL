const express = require('express');
const morgan = require('morgan');
const httpProxy = require('http-proxy');
const axios = require('axios');

const proxy = require('./proxyServer/');

var apiProxy = httpProxy.createProxyServer();

const mainApp = express();

const proxyServer = new proxy.Server;

const MortgageBucket = 'http://13.52.171.152:4003';
const SimiliarBucket = 'http://13.57.210.79:4004';
const mainPort = 4000;
const ScheduleServer = 'http://localhost:3002';
const MortgageServer = 'http://localhost:4003';
const SimiliarServer = 'http://localhost:4004';

const AWS = 'https://bluefinrol.s3-us-west-1.amazonaws.com';


mainApp.use(morgan('combined'));

mainApp.get('/mortgageApp/*', (req, res) => {
  // console.log('EC2 Request');
  // // apiProxy.web(req, res, {target: MortgageServer});
  // proxyServer.redirect(req, res, AWS);
  const fullRoute = MortgageBucket + '/dist/bundle.js';
  console.log(fullRoute);
  axios.get(fullRoute)
    .then((response)=>{
      console.log(response.data);
      res.send(response.data);
    });
});

mainApp.get('/scheduleTour/*', (req, res) => {
  console.log('AWS Request');
  // apiProxy.web(req, res, {target: MortgageServer});
  proxyServer.redirect(req, res, AWS);
});

mainApp.get('/similiarHomes/*', (req, res) => {
  // console.log('AWS Request');
  // apiProxy.web(req, res, {target: MortgageServer});
  // proxyServer.redirect(req, res, AWS);
  const fullRoute = SimiliarBucket + '/dist/bundle.js';
  axios.get(fullRoute)
    .then((response)=>{
      // console.log(response.data);
      res.send(response.data);
    });
});


mainApp.use(express.static('public'));



mainApp.get('/mortgage:listingId', (req, res) => {
  console.log('MortgageRequest');
  // apiProxy.web(req, res, {target: MortgageServer});
  proxyServer.redirect(req, res, MortgageBucket);
});

mainApp.get('/house', (req, res) => {
  console.log('Schedule Request');
  // apiProxy.web(req, res, {target: ScheduleServer});
  proxyServer.redirect(req, res, ScheduleServer);
});

mainApp.get('/similar-listings', (req, res) => {
  console.log('Similar Homes Request');
  // apiProxy.web(req, res, {target: SimiliarServer});
  // proxyServer.redirect(req, res, SimiliarServer);
  axios.get('http://13.57.210.79:4004/similar-listings')
    .then((response) => {
      res.send(response.data);
    });
});

mainApp.listen(mainPort, () => {
  console.log(`Main App is listening on port ${mainPort}, only use to serve up static HTML files.`);
});

// mainApp.listen(SchedulePort, ()=> {

// });

