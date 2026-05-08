const home = (req, res) => {
	res.setHeader('Content-Type', 'text-html');
	res.write(
		`<html>
        <head><title>Student Form</title></head>
        <body style="color: white; background-color: black;">
        <h2>Enter your Details</h2>
        <form action="/submit-details" method="POST">
        <label for="username">Enter your name : </label>
        <input type="text" id="username" name="username" placeholder="Enter your Username" required><br>
        <label for="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male" required>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
        <br><button type="submit" value="Submit">Submit</button>
        </form>
        </body>
        </html>`,
	);
	res.statusCode = 200;
	res.end();
};

module.exports = {
	handler: home,
};
