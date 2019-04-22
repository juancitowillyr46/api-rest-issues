const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('../routes/index.route');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/', routes);
app.get('/', (req, res) => res.send('Hello World'));

module.exports = app;