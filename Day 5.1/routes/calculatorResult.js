const add = require('../modules/sum.js');

const calculatorResult = (req, res) => {
	const body = [];
	req.on('data', chunk => {
		body.push(chunk);
	});
	req.on('end', () => {
		const parsedBody = Buffer.concat(body).toString();
		const params = new URLSearchParams(parsedBody);
		const bodyObject = Object.fromEntries(params);
		const result = add(bodyObject.first, bodyObject.second);
		res.setHeader('Content-Type', 'text-html');
		res.write(
			`<html>
        <head><title>Calculator Result</title></head>
        <body style="color: white; background-color: black;">
        <h2>Calculator Result</h2>
        <p>Result : ${result}</p>
        </body>
        </html>`,
		);
		res.statusCode = 200;
		res.end();
	});
};

module.exports = calculatorResult;
