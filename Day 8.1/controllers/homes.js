const Home = require('../models/home');

exports.getHomes = (req, res, next) => {
	res.render('home', {
		homes: Home.fetchAll(),
		pageTitle: 'airbnb home',
		currentPage: 'home',
	});
};

exports.getAddHome = (req, res, next) => {
	res.render('add-home', {
		pageTitle: 'airbnb home',
		currentPage: 'add-home',
	});
};

exports.postAddHome = (req, res, next) => {
	const { housename, location, price, rating, photoUrl } = req.body;
	const home = new Home(
		housename.trim(),
		location.trim(),
		price.trim(),
		rating.trim(),
		photoUrl.trim(),
	);

	home.save(); // saving in DB

	res.render('home-added', {
		pageTitle: 'airbnb home',
		currentPage: 'thank you',
	});
};
