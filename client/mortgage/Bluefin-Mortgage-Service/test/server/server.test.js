// const NodeEnvironment = require('jest-environment-node');

// // import packages
// const request = require('supertest');

// import files
// const app = require('../../server/app.js');
// const connection = require('../../database/connection.js');
// const model = require('../../database/model.js');
// const db = require('../../database');

// const listingId = 1;
// const adId = 1;

// // before all
// beforeAll(() => {
//   // open connection
//   return Promise.all([model.Listing.collection.drop(), model.MortgageAd.collection.drop()])
//     .then(() => {
//       const testListing = new model.Listing(
//         {
//           _id: listingId,
//           price: 100000,
//           HOA: 100,
//           zip: '94110',
//           region: 'SFBayArea',
//         },
//       );

//       const testMortgageAd = new model.MortgageAd(
//         {
//           _id: adId,
//           type: '30 Year Fixed',
//           seller: 'First Bank of Fraud',
//           NMLS: 65111,
//           APR: 5.01,
//           interestRate: 5.01,
//           minimum: 500000,
//           maximum: 500000,
//           region: 'SFBayArea',
//         },
//       );
//       return Promise.all([testMortgageAd.save(), testListing.save()]);
//     });
// });

// afterAll(() => {
//   Promise.all([model.Listing.collection.drop(), model.MortgageAd.collection.drop()])
//     .then(() => connection.closeAsync());
// });

// integration test - get route on a listing

// describe('It should properly respond to a get request for a listing', () => {
//   test('It should send back listing and relevant mortgage data', () => {
//     const path = `/listing${listingId}`;
//     return request(app.app).get(path)
//       .then((response) => {
//         // console.log('response', response.body);
//         expect(response.body.listing.zip).toEqual('94110');
//         expect(response.body.ads[0].seller).toEqual('First Bank of Fraud');
//       });
//   });
// });

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

// describe('It should update a listing, when a click and then redirect to the checkout page', () => {
//   test('The listing should change', () => {
//     const path = '/adClick';
//     const id = adId;
//     return request(app.app)
//       .patch(path)
//       .send({ id: `1` })
//       .set('Content-Type', 'application/json')
//       .set('Accept', 'application/json')
//       .then((response) => {
//         // console.log(response.text);
//         expect(JSON.parse(response.text).clicks).toEqual(1);
//       });
//   });
// });
