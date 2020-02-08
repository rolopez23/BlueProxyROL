const axios = require('axios');

class Server {
  constructor() {
  }

  // Input is a request (required), response (required), target_site(required), and path optional.

  //Function takes a request, redirects it to the target and serves up the response to the target.  Path allows more control if you need it for the target. 
  redirect(req, res, target, path = null) {
    let fullRoute = target;
    if (path === null) {
      const url = req.url;
      fullRoute = target + url;
    } else {
      fullRoute = target + path;
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