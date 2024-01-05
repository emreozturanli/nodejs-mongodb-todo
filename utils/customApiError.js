class CustomAPIError extends Error {
	// define the keys
	// status_code
	// message
	// errorCause
	// id
	// payload

	//add keys to constructor params
	constructor(status_code, message, errorCause, id, payload) {
		super(message);
		this.status_code = status_code;
		this.message = message;
		this.errorCause = errorCause;
		this.id = id;
		this.payload = payload;
	}
}

const createCustomError = (statusCode, message, errorCause, id, payload) => {
	return new CustomAPIError(statusCode, message, errorCause, id, payload);
};

module.exports = { CustomAPIError, createCustomError };
