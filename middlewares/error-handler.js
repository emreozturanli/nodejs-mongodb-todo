const { CustomAPIError } = require("../utils/customApiError");

const errorHandler = (err, req, res, next) => {
	if (err instanceof CustomAPIError) {
		const errorStatusCode = res.statusCode ?? 500;
		res.status(errorStatusCode).send({
			error: true,
			status: err.status_code,
			message: err.errors.message,
			cause: err.errorCause,
			payload: err.payload,
			id: err.id,
		});
	}
};

module.exports = errorHandler;
