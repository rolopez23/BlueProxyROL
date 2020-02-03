const faker = require('faker');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'scheduleTours'
});



for (let i = 0; i < 100; i++) {
  let q1 = 'INSERT INTO agents (name, phone_number,email) VALUES (?, ?, ?)';
  let agentData = [faker.name.findName(), faker.phone.phoneNumber(), faker.internet.email()];
  db.query(q1, agentData);

  let q2 = 'INSERT INTO users (name, phone_number,email) VALUES (?, ?, ?)';
  let userData = [faker.name.findName(), faker.phone.phoneNumber(), faker.internet.email()];
  db.query(q2, userData);
}

for (let i = 0; i < 100; i++) {
  let q3 = 'INSERT INTO listings (id, listing_price, agent_id) VALUES (?, ?, ?)';
  let houseId = Math.floor(Math.random() * (199999999 - 100000000) + 100000000);
  let listingPrice = Math.floor(Math.random() * (10000000 - 200000) + 20000);
  let agentId = Math.floor(Math.random() * (100 - 1) + 1);
  db.query(q3, [houseId, listingPrice, agentId]);
}

db.end();
