const fs = require('fs');

const submitDetails = (req, res) => {
	const body = [];
	req.on('data', chunk => {
		console.log(chunk);
		body.push(chunk);
	});
	req.on('end', () => {
		const parsedBody = Buffer.concat(body).toString();
		const params = new URLSearchParams(parsedBody);
		const bodyObject = Object.fromEntries(params);
		fs.writeFile('user.txt', JSON.stringify(bodyObject), error => {
			console.log('File written successfully.');
			res.statusCode = 302;
			res.setHeader('Location', '/');
			res.end();
		});
	});
};

exports.handler = submitDetails;
