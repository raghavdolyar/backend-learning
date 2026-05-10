// external modules
const express = require('express');
const router = express.Router();

router.get('/add-home', (req, res, next) => {
	res.render('add-home', { pageTitle: 'airbnb home' });
});

const homes = [];

router.post('/add-home', (req, res, next) => {
	homes.push({ housename: req.body.housename.trim() });
	res.render('home-added', { pageTitle: 'airbnb home' });
});

module.exports = {
	hostRouter: router,
	registeredHomes: homes,
};
