const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'HR',
  database: 'scheduleTours',
});

const getData = (id, callback) => {
  // required info: houseID, house price, agent name
  const q = 'SELECT listings.id, listings.listing_price, agents.name, agents.phone_number FROM listings, agents WHERE listings.id=? AND listings.agent_id=agents.id';
  db.query(q, id, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getData,
};
