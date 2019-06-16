const http = require('http');
const express = require('express');
const api = require('./api/api');
const path = require('path');
const cookie = require('cookie-parser');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Server listen in port ${port}`);
});

app.use(express.static('dist'));
app.use('/api', api);
app.use(express.static('dist'));
app.use(cors());

app.get('*', (req, res) => {
  const index = path.join(__dirname, bundle);
  res.sendFile(index);
});
