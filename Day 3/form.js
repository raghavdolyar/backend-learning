const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);
	res.setHeader('Content-Type', 'text-html');
	if (req.url === '/') {
		res.write('<html>');
		res.write('<head><title>Student Form</title></head>');
		res.write('<body style="color: white; background-color: black;">');
		res.write('<h2>Enter your Details</h2>');
		res.write('<form action="/submit-details" method="POST">');
		res.write('<label for="username">Enter your name : </label>');
		res.write(
			'<input type="text" id="username" name="username" placeholder="Enter your Username" required><br>',
		);
		res.write('<label for="gender">Gender:</label>');
		res.write(
			'<input type="radio" id="male" name="gender" value="male" required>',
		);
		res.write('<label for="male">Male</label>');
		res.write(
			'<input type="radio" id="female" name="gender" value="female">',
		);
		res.write('<label for="female">Female</label>');
		res.write('<br><button type="submit" value="Submit">Submit</button>');
		res.write('</form>');
		res.write('</body>');
		res.write('</html>');
	} else if (
		req.method === 'POST' &&
		req.url.toLowerCase() === '/submit-details'
	) {
		const body = [];
		req.on('data', chunk => {
			console.log(chunk);
			body.push(chunk);
		});
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const params = new URLSearchParams(parsedBody);
			// const bodyObject = {};
			// for (const [key, value] of params.entries()) {
			// 	bodyObject[key] = value;
			// }
			const bodyObject = Object.fromEntries(params); // JS Object
			fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
		});
		res.statusCode = 302; // redirection
		res.setHeader('Location', '/'); // redirects to Home Page
	} else {
		res.write('<html>');
		res.write('<head><title>Unable to Find</title></head>');
		res.write('<body style="color: white; background-color: black;">');
		res.write('<h2>Unable to find your requested URL</h2>');
		res.write('</body>');
		res.write('</html>');
		res.statusCode = 404;
	}
	res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
	console.log(`Server running on address http://localhost:${PORT}`);
});
