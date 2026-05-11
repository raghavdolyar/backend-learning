// external modules
const express = require('express');
const router = express.Router();

// local modules
const homesController = require('../controllers/homes');

router.get('/add-home', homesController.getAddHome);

router.post('/add-home', homesController.postAddHome);

module.exports = {
	hostRouter: router,
};
