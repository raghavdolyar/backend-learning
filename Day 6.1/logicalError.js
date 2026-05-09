const logical = () => {
	let num = 5;
	if ((num = 10)) {
		console.log('num is 10');
	} else {
		console.log('num is not 10');
	}
};

module.exports = logical;
