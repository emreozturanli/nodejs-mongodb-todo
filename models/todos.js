const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "title is required"],
		trim: true,
		maxlength: [30, "title should have maximum 20 charachters"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("Todo", TodoSchema);
