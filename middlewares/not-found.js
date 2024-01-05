const notFound = (req, res) => {
	res.status(404).send("No Route Found");
};

module.exports = notFound;
