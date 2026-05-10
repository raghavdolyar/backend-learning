// core modules
const path = require('path');

// external modules
const express = require('express');
const router = express.Router();

// local modules
const rootPath = require('../utils/path-util');
const { registeredHomes } = require('./hostRouter');

router.get('/', (req, res, next) => {
	console.log(registeredHomes);
	res.sendFile(path.join(rootPath, 'views/home.html'));
});

module.exports = {
	userRouter: router,
};
