const express = require('express');

const routes = express.Router();

const DevController = require('./controllers/DevController.js');

routes.get('/', (req, res) => {
    return res.json({message: `oi ${req.query.name}`});
});

routes.post('/devs', DevController.store);

module.exports = routes;