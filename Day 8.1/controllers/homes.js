const homes = [];

exports.getHomes = (req, res, next) => {
	res.render('home', {
		homes: homes,
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
	homes.push({
		house: req.body.housename.trim(),
		location: req.body.location.trim(),
		price: req.body.price.trim(),
		rating: req.body.rating.trim(),
		photo: req.body.photo.trim(),
	});
	res.render('home-added', {
		pageTitle: 'airbnb home',
		currentPage: 'thank you',
	});
};

exports.notFound = (req, res, next) => {
	res.status(404).render('404', {
		pageTitle: '404 — Page Not Found',
		currentPage: '404',
	});
};
