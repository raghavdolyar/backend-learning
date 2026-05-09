const express = require('express');

const server = express();

server.use((req, res, next) => {
	console.log('first middleware', req.url, req.method);
	next(); // going to second middleware
});

server.use((req, res, next) => {
	console.log('second middleware', req.url, req.method);
	res.send(
		`<body style="color: white; background-color: black;">Welcome to Devil's Server</body>`,
	);
});

const PORT = 3000;

server.listen(PORT, () => {
	console.log(`Server running on address http://localhost:${PORT}`);
});
