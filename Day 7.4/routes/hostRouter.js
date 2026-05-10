// core modules
const path = require('path');

// external modules
const express = require('express');
const router = express.Router();

// local modules
const rootPath = require('../utils/path-util');

router.get('/add-home', (req, res, next) => {
	res.sendFile(path.join(rootPath, 'views/add-home.html'));
});

const homes = [];

router.post('/add-home', (req, res, next) => {
	console.log(req.body);
	homes.push(req.body);
	res.sendFile(path.join(rootPath, 'views/home-added.html'));
});

module.exports = {
	hostRouter: router,
	registeredHomes: homes,
};
