// core modules
const path = require('path');

// external modules
const express = require('express');

// local modules
const { userRouter } = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter');
const rootPath = require('./utils/path-util');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// granting access to public folder
app.use(express.static(path.join(rootPath, 'public')));

app.use((req, res, next) => {
	console.log(req.url, req.method);
	next();
});

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use('/host', hostRouter);

app.use((req, res, next) => {
	res.status(404).render('404', { pageTitle: '404 — Page Not Found' });
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on address http://localhost:${PORT}`);
});
