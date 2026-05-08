const notFound = (req, res) => {
	res.setHeader('Content-Type', 'text-html');
	res.write(
		`<html>
			<head><title>Unable to Find</title></head>
			<body style="color: white; background-color: black;">
			<h2>Unable to find your requested URL</h2>
			</body>
			</html>`,
	);
	res.statusCode = 404;
	res.end();
};

module.exports.handler = notFound;
