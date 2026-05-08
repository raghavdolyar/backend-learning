const calculator = (req, res) => {
	res.setHeader('Content-Type', 'text-html');
	res.write(
		`<html>
        <head><title>Calculator</title></head>
        <body style="color: white; background-color: black;">
        <h2>Calculator</h2>
        <form action="/calculator-result" method="POST">
        <label for="first">Enter first number : </label>
        <input type="number" id="first" name="first" required><br>
        <label for="second">Enter second number : </label>
        <input type="number" id="second" name="second" required><br>
        <br><button type="submit" value="Sum">Sum</button>
        </form>
        </body>
        </html>`,
	);
	res.statusCode = 200;
	res.end();
};

module.exports = calculator;
