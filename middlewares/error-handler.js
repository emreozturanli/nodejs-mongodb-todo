const { CustomAPIError } = require("../utils/customApiError");

const errorHandler = (err, req, res, next) => {
	const errorStatusCode = res.statusCode ?? 500;
	if (err instanceof CustomAPIError) {
		res.status(errorStatusCode).send({
			error: true,
			status: err.status_code,
			message: err.message,
			cause: err.errorCause,
			payload: err.payload,
			id: err.id,
		});
	} else {
		res.status(errorStatusCode).send({
			error: true,
			status: err.status_code,
			cause: err,
			payload: err.payload,
			id: err.id,
		});
	}
};

module.exports = errorHandler;
