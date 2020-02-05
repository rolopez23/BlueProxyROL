const axios = require('axios');

class Server {
  constructor() {

  }

  redirect(req, res, target) {
    const url = req.url;
    const fullRoute = target + url;
    console.log(fullRoute);
    axios.get(fullRoute)
      .then((response) => {
        // console.log('response received', response.data);
        return res.send(response.data);
      })
      .catch(console.log('error in route')  );
  }
}

module.exports = {
  Server
};