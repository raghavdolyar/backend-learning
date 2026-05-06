const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
	res.setHeader('Content-Type', 'application/json');
	res.write(
		JSON.stringify({
			success: true,
			message: 'Hello',
		}),
	);
	res.end();
	// process.exit();
	// stops event loop when server hears its 1st request
});

const PORT = 3000;

server.listen(PORT, () => {
	console.log(`Server running on address http://localhost:${PORT}`);
});
