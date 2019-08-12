const express = require('express');

const routes = express.Router();

const DevController = require('./controllers/DevController.js');
const LikeController = require('./controllers/LikeController.js');
const DislikeController = require('./controllers/DislikeController.js');

routes.get('/version', (req, res) => {
    res.json({version: 'v1'});
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DislikeController.store)
module.exports = routes;