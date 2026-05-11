const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path-util');

const homeDBPath = path.join(rootDir, 'database/homes.json');

module.exports = class Home {
	constructor(name, location, price, rating, photoUrl) {
		this.name = name;
		this.location = location;
		this.price = price;
		this.rating = rating;
		this.photoUrl = photoUrl;
	}

	save() {
		Home.fetchAll(homes => {
			homes.push(this);
			fs.writeFile(homeDBPath, JSON.stringify(homes), err => {
				console.error(err);
			});
		});
	}

	static fetchAll(callback) {
		const fileContent = fs.readFile(homeDBPath, (err, data) => {
			callback(err ? [] : JSON.parse(data));
		});
	}
};
