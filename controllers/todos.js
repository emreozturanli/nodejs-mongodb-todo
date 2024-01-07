const Todo = require("../models/todos");
const asyncWrapper = require("../middlewares/async-wrapper");
const { createCustomError } = require("../utils/customApiError");

const getAllTodos = asyncWrapper(async (req, res, next) => {
	const todos = await Todo.find({});
	if (todos) {
		res.status(200).send({
			error: false,
			data: todos,
			message: "Todos successfully fetched",
			todoTotal: todos.length,
		});
	} else {
		res.statusCode = 400;
		return next(createCustomError(res.statusCode, "No record found"));
	}
});

const createTodo = asyncWrapper(async (req, res, next) => {
	const todo = await Todo.create(req.body).catch((error) => {
		if (error.name === "ValidationError") {
			res.statusCode = 400;
			return next(createCustomError(res.statusCode, error.name, error.message, undefined, req.body));
		} else {
			res.statusCode = 404;
			return next(createCustomError(res.statusCode, "No record found", undefined, undefined, req.body));
		}
	});
	if (todo) {
		res.status(201).send({
			error: false,
			payload: req.body,
			message: "Todo successfully created",
			data: todo,
		});
	}
});

const getTodoById = asyncWrapper(async (req, res, next) => {
	const todo = await Todo.findOne({ _id: req.params.id });
	if (todo) {
		res.status(200).send({
			error: false,
			message: "Todo successfully fetched",
			data: todo,
		});
	} else {
		res.statusCode = 404;
		return next(createCustomError(res.statusCode, "No record found", undefined, req.params.id, req.body));
	}
});

const updateTodoById = asyncWrapper(async (req, res, next) => {
	const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidators: true,
	}).catch((error) => {
		if (error.name === "ValidationError") {
			res.statusCode = 400;
			return next(createCustomError(res.statusCode, error.name, error.message, undefined, req.body));
		} else {
			res.statusCode = 404;
			return next(createCustomError(res.statusCode, "No record found", undefined, undefined, req.body));
		}
	});
	if (todo) {
		res.status(202).send({
			error: false,
			payload: req.body,
			message: "Todo successfully updated",
			data: todo,
		});
	}
});

const deleteTodo = asyncWrapper(async (req, res, next) => {
	const result = await Todo.deleteOne({ _id: req.params.id });
	console.log(result);
	if (result && result.acknowledged && result.deletedCount > 0) {
		res.status(200).send({
			error: false,
			message: "Todo deleted successfully",
			id: req.params.id,
		});
	} else {
		res.statusCode = 404;
		return next(createCustomError(res.statusCode, "No record found", undefined, req.params.id, undefined));
	}
});

module.exports = {
	getAllTodos,
	createTodo,
	deleteTodo,
	getTodoById,
	updateTodoById,
};
