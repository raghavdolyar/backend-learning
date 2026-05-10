// core modules
const path = require('path');

// external modules
const express = require('express');
const userRouter = express.Router();

// local modules
const rootPath = require('../utils/path-util');

userRouter.get('/', (req, res, next) => {
	res.sendFile(path.join(rootPath, 'views/home.html'));
});

module.exports = userRouter;
