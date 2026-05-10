// external modules
const express = require('express');
const router = express.Router();

// local modules
const { registeredHomes } = require('./hostRouter');

router.get('/', (req, res, next) => {
	console.log(registeredHomes);
	res.render('home', { homes: registeredHomes, pageTitle: 'airbnb home' });
});

module.exports = {
	userRouter: router,
};
