const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:red">APP is Running...Horraaayyyy');
});
app.listen(3000, (req, res) => {
  console.log('App is runing in port 3000');
});
