const axios = require('axios');

class Server {
  constructor() {
    // Boolean whether to include the prior path on target.
  }

  redirect(req, res, target, path = null) {
    let fullRoute = target;
    if (path === null) {
      const url = req.url;
      fullRoute = target + url;
    } else {
      fullRoute = target + path;
      // console.log(target + path);
    }
    axios.get(fullRoute)
      .then((response) => {
        return res.send(response.data);
      })
      .catch((error) => console.error('error'));

  }
}

module.exports = {
  Server
};