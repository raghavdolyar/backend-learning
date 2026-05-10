// core modules
const path = require('path');

// external modules
const express = require('express');
const hostRouter = express.Router();

// local modules
const rootPath = require('../utils/path-util');

hostRouter.get('/add-home', (req, res, next) => {
	res.sendFile(path.join(rootPath, 'views/add-home.html'));
});

hostRouter.post('/add-home', (req, res, next) => {
	console.log(req.body);
	res.sendFile(path.join(rootPath, 'views/home-added.html'));
});

module.exports = hostRouter;
