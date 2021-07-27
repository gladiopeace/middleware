const config = require('./config.json');
const express = require('express');
const responseTime = require('response-time')
const redis = require('redis');
const uuid = require('uuid');
const axios = require('axios');

var app = express();

app.use(responseTime());

app.listen(config.PORT, function() {
    console.log('Cache-in-hand is running!');
})

app.get('/go-for-broke', async(req,res) => {
    axios.get(config.API_URL + config.API_KEY)
    .then(result => {
      res.send(JSON.stringify(result.data));
    }).catch(err => {
      console.error(err);
    });
});;
