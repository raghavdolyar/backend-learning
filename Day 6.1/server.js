const http = require('http');

const logical = require('./logicalError');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);
	logical();
});

const PORT = 3000;

server.listen(PORT, () => {
	console.log(`Server running on address http://localhost:${PORT}`);
});
