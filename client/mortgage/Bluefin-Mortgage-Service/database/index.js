const model = require('./model.js');
const connection = require('./connection.js');

connection.open(() => {
  console.log('Connected to Mongo');
});


const getListing = (id) => model.Listing.findById(id);
// eslint-disable-next-line quote-props
const getMortgageAds = (region) => model.MortgageAd.find({ 'region': region });

// updates ad clicks

const updateAd = (id, clicks) => model.MortgageAd.updateOne({ _id: id }, { "clicks": clicks });

// only used for testing
const getAd = (ad) => model.MortgageAd.findById(ad);

module.exports = {
  getListing,
  getMortgageAds,
  getAd,
  updateAd,
};
