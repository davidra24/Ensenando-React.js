const express = require('express');
const query = require('../database/queries');
const api = express.Router();
const bodyParser = require('body-parser');

api.use(bodyParser.json({ limit: '100mb' }));
api.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
api.use(bodyParser.urlencoded({ extended: false }));

api.get('/registro', query.getAllRegisters);
api.get('/registro/:id', query.getSingleRegister);
api.post('/registro', query.createRegister);
api.put('/registro/:id', query.updateRegister);
api.delete('/registro/:id', query.deleteRegister);

module.exports = api;
