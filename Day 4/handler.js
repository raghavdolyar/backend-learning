const { handler: home } = require('./routes/home');
const submitDetails = require('./routes/submitDetails').handler;
const notFound = require('./routes/notFound').handler;

const userRequestHandler = (req, res) => {
	console.log(req.url, req.method);

	if (req.url === '/') {
		home(req, res);
	} else if (
		req.method === 'POST' &&
		req.url.toLowerCase() === '/submit-details'
	) {
		submitDetails(req, res);
	} else {
		notFound(req, res);
	}
};

module.exports = userRequestHandler;
