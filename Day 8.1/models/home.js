const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path-util');

const homes = []; // fake database (inmemory variable)

module.exports = class Home {
	constructor(name, location, price, rating, photoUrl) {
		this.name = name;
		this.location = location;
		this.price = price;
		this.rating = rating;
		this.photoUrl = photoUrl;
	}

	save() {
		homes.push(this);
		const homeDBPath = path.join(rootDir, 'database/homes.json');
		fs.writeFile(homeDBPath, JSON.stringify(homes), err => {
			console.error(err);
		});
	}

	static fetchAll() {
		return homes;
	}
};
