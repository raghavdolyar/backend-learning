const home = require('./routes/home');
const calculator = require('./routes/calculator');
const calculatorResult = require('./routes/calculatorResult');
const notFound = require('./routes/notFound');

const userRequestHandler = (req, res) => {
	console.log(req.url, req.method);

	if (req.url === '/') {
		home(req, res);
	} else if (req.url.toLowerCase() === '/calculator') {
		calculator(req, res);
	} else if (
		req.method === 'POST' &&
		req.url.toLowerCase() === '/calculator-result'
	) {
		calculatorResult(req, res);
	} else {
		notFound(req, res);
	}
};

module.exports = userRequestHandler;
