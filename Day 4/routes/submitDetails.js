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
		fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
	});
	res.statusCode = 302;
	res.setHeader('Location', '/');
	res.end();
};

exports.handler = submitDetails;
