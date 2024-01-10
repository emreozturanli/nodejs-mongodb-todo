// we dont use this async wrapper since we installed express-async-errors

const asyncWrapper = (func) => {
	return async (req, res, next) => {
		try {
			await func(req, res, next);
		} catch (error) {
			return next(error);
		}
	};
};

module.exports = asyncWrapper;
