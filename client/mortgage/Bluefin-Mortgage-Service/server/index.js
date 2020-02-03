
const server = require('./app.js');

const port = 4003;

server.app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Mortgage SubApp is listening on port ${port}`);
});
