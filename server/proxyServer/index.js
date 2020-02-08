const axios = require('axios');

class Server {
  constructor() {

  }

  redirect(req, res, target) {
    const url = req.url;
    const fullRoute = target + url;
    // console.log('fullRoute', fullRoute);
    axios.get(fullRoute)
      .catch((error) => console.error(target, error))
      .then((response) => {
        // console.log('response received', response.data);
        return res.send(response.data);
      });

  }
}

module.exports = {
  Server
};