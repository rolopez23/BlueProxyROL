//  import statements
const express = require('express');
const path = require('path');

// file dependencies
const db = require('../database/');
// declare file Path
const filePath = path.join(__dirname, '..', 'public');
// name App
const app = express();

app.use(express.static(filePath));

app.use(express.json());
app.use(express.urlencoded());

app.get('/listing:listingId', (req, res) => {
  // Get the id of the item, form req
  console.log('request', req.params);
  const { listingId } = req.params;
  const send = {};
  // Send request for that listing
  db.getListing(listingId)
    .then((data1) => {
      send.listing = data1;
      const { region } = data1;
      // console.log(region);
      return db.getMortgageAds(region);
    })
    .then((data2) => {
      send.ads = data2;
      // console.log(data, send.listing, send.ads);
      res.send(send);
    });
});

app.patch('/adClick', (req, res) => {
  // Get the id of the add
  console.log('recieved request', req.body);
  const adId = req.body.id;
  let adRecord = {};
  // console.log(adId);
  db.getAd(adId)
    .then((ad) => {
      // console.log('ad', ad.clicks);
      const newClick = ad.clicks + 1;
      adRecord = ad;
      adRecord.clicks = newClick;
      return db.updateAd(adId, newClick);
    })
    .then(() => {
      // res.location('./secureContact.html');
      // console.log(adRecord);
      res.send(JSON.stringify(adRecord));
      // res.redirect('./securecontanct.html');
      // console.log(res);
    });
  // Increment that add by one

  // Redirect to third party site.
});

module.exports = {
  app,
};
