// core modules
const path = require('path');

// external modules
const express = require('express');

// local modules
const { userRouter } = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter');
const { notFoundRouter } = require('./routes/404Router');
const rootDir = require('./utils/path-util');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// granting access to public folder
app.use(express.static(path.join(rootDir, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use('/host', hostRouter);
app.use(notFoundRouter);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on address http://localhost:${PORT}`);
});
