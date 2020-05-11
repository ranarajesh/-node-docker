const express = require('express');
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URI);

const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
const app = express();

app.get('/', (req, res) => {
  //client.set('stations', JSON.stringify(staions), (err, data) => {

  client.get('stations', (err, data) => {
    console.log('data :>> ', data);
    console.log('databackup :>> ', data);
    res.json(JSON.parse(data));
  });
  //});
});
app.listen(3000, (req, res) => {
  console.log('App is runing in port 3000');
});
