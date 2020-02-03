const testApp = require('./index.js');
const supertest = require('supertest');
const request = supertest(testApp);

testApp.listen(8000);

testApp.get('/test', async (req, res) => {
  res.json({message: 'yay it passed!'});
});

it('gets the test endpoint', async done => {
  const response = await request.get('/test');
  expect(response.status).toBe(200);
  expect(response.body.message).toBe('yay it passed!');
  done();
});
