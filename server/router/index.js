const Router = require('express').Router();

Router.get('/', (req, res) => {
  res.send("hit the api");
});

Router.post('/sortinator', (req, res) => {
  res.send("hit api");
});


module.exports = Router;