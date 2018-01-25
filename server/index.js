const express = require('express');
const app = express();
const Router = require('./router');
const path = require('path');
const bodyParser = require('body-parser');

const publicFolder = path.resolve(__dirname, '../public');


app.use(express.static(publicFolder));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', Router);

module.exports = app;