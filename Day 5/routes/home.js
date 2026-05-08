const home = (req, res) => {
	res.setHeader('Content-Type', 'text-html');
	res.write(
		`<html>
    <head><title>Welcome Visitor</title></head>
    <body style="color: white; background-color: black;">
    <h1>Welcome to our Server</h1>
    <a href="./calculator">Go to Calculator</a>
    </body>
    </html>`,
	);
	res.statusCode = 200;
	res.end();
};

module.exports = home;
