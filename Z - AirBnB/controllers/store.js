const Home = require('../models/home');

exports.getIndex = (req, res, next) => {
	Home.fetchAll(regHomes => {
		res.render('store/index', {
			homes: regHomes,
			pageTitle: 'airbnb',
			currentPage: 'index',
		});
	});
};

exports.getHomes = (req, res, next) => {
	Home.fetchAll(regHomes => {
		res.render('store/user-home-list', {
			homes: regHomes,
			pageTitle: 'homes list',
			currentPage: 'homes',
		});
	});
};

exports.getBookings = (req, res, next) => {
	res.render('store/bookings', {
		pageTitle: 'my bookings',
		currentPage: 'bookings',
	});
};

exports.getFavouriteList = (req, res, next) => {
	Home.fetchAll(regHomes => {
		res.render('store/favourite-list', {
			homes: regHomes,
			pageTitle: 'my favourites',
			currentPage: 'favourites',
		});
	});
};
