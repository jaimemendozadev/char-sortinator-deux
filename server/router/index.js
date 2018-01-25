const Router = require('express').Router();
const {sortinator} = require('./controllers');

Router.get('/', (req, res) => {
  res.send("hit the api");
});

Router.post('/sortinator', sortinator);

module.exports = Router;