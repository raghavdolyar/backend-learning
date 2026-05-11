// external modules
const express = require('express');
const router = express.Router();

// local modules
const homesController = require('../controllers/homes');

router.get('/', homesController.getHomes);

module.exports = {
	userRouter: router,
};
