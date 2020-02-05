const express = require('express');
const morgan = require('morgan');
// const httpProxy = require('http-proxy');

const proxy = require('./proxyServer/');

// var apiProxy = httpProxy.createProxyServer();

const mainApp = express();

const proxyServer = new proxy.Server;

const mainPort = 4000;
const ScheduleServer = 'http://localhost:3002';
const MortgageServer = 'http://localhost:4003';
const SimiliarServer = 'http://localhost:4004';

const AWS = 'https://bluefinrol.s3-us-west-1.amazonaws.com';


mainApp.use(morgan('combined'));

mainApp.get('/mortgageApp/*', (req, res) => {
  console.log('AWS Request');
  // apiProxy.web(req, res, {target: MortgageServer});
  proxyServer.redirect(req, res, AWS);
});

mainApp.get('/scheduleTour/*', (req, res) => {
  console.log('AWS Request');
  // apiProxy.web(req, res, {target: MortgageServer});
  proxyServer.redirect(req, res, AWS);
});

mainApp.get('/similiarHomes/*', (req, res) => {
  console.log('AWS Request');
  // apiProxy.web(req, res, {target: MortgageServer});
  proxyServer.redirect(req, res, AWS);
});


mainApp.use(express.static('public'));



mainApp.get('/mortgage:listingId', (req, res) => {
  console.log('MortgageRequest');
  // apiProxy.web(req, res, {target: MortgageServer});
  proxyServer.redirect(req, res, MortgageServer);
});

mainApp.get('/house', (req, res) => {
  console.log('Schedule Request');
  // apiProxy.web(req, res, {target: ScheduleServer});
  proxyServer.redirect(req, res, ScheduleServer);
});

mainApp.get('/listings', (req, res) => {
  console.log('Similiar Homes Request');
  // apiProxy.web(req, res, {target: SimiliarServer});
  proxyServer.redirect(req, res, SimiliarServer);
});

mainApp.listen(mainPort, () => {
  console.log(`Main App is listening on port ${mainPort}, only use to serve up static HTML files.`);
});

// mainApp.listen(SchedulePort, ()=> {

// });

