const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
	console.log('first middleware', req.url, req.method);
	next(); // going to second middleware
});

app.use('/', (req, res, next) => {
	console.log('second middleware', req.url, req.method);
	next();
});

// app.use('/', (req, res, next) => {
// 	console.log('third middleware', req.url, req.method);
//	res.send(
//		`<body style="color: white; background-color: black;">Welcome to Devil's Server</body>`,
//	);
// });

app.get('/', (req, res, next) => {
	console.log('fourth middleware', req.url, req.method);
	res.send(`<html>
        <head><title>Home</title></head>
        <body style="color: white; background-color: black;">
        <h2>Home</h2>
        <p>Go to <a href="/contact-us">contact</a> page</p>
        </body>
        </html>`);
});

app.get('/contact-us', (req, res, next) => {
	console.log('fifth middleware', req.url, req.method);
	res.send(`<html>
        <head><title>Contact Us</title></head>
        <body style="color: white; background-color: black;">
        <h2>Contact Us</h2>
        <form action="/contact-us" method="POST">
        <label for="username">Enter your username : </label>
        <input type="text" id="username" name="username" required><br>
        <label for="email">Enter your email : </label>
        <input type="email" id="email" name="email" required><br>
        <br><button type="submit">Submit</button>
        </form>
        </body>
        </html>`);
});

app.post('/contact-us', (req, res, next) => {
	console.log('sixth middleware', req.url, req.method);
	res.send(`<html>
        <head><title>Thank You</title></head>
        <body style="color: white; background-color: black;">
        <h2>Thank You</h2>
        <a href="/">Return Home</a>
        </body>
        </html>`);
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`server running on address http://localhost:${PORT}`);
});
