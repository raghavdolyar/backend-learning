// external modules
const express = require('express');
const router = express.Router();

// local modules
const homesController = require('../controllers/homes');

router.use('/', homesController.notFound);

module.exports = {
	notFoundRouter: router,
};
