const notFound = (req, res) => {
	res.setHeader('Content-Type', 'text-html');
	res.write(
		`<html>
			<head><title>Unable to Find</title></head>
			<body style="color: white; background-color: black;">
			<h2>404 Page not Found</h2>
			<a href="/">Go to Home</a>
			</body>
			</html>`,
	);
	res.statusCode = 404;
	res.end();
};

module.exports = notFound;
