// external modules
const express = require('express');
const router = express.Router();

// local modules
const errorsController = require('../controllers/errors');

router.use('/', errorsController.pageNotFound);

module.exports = {
	notFoundRouter: router,
};
