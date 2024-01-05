const mongoose = require("mongoose");

const connectMongodb = (dbkey) => {
	return mongoose.connect(dbkey);
};

module.exports = connectMongodb;
