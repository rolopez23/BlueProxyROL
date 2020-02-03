// File for concern of connecting to the database.
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mortgages';

mongoose.connect(uri, { useNewUrlParser: true });

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
const open = (callback) => db.once('open', () => callback());
const close = (callback) => db.close(() => callback());
const openAsync = () => db.openUri(uri);
const closeAsync = () => db.close();
const disconnect = () => mongoose.disconnect();

module.exports = {
  open,
  close,
  openAsync,
  closeAsync,
  disconnect,
};


