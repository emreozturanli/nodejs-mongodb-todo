const Todo = require("../models/todos");
const asyncWrapper = require("../middlewares/async-wrapper");
const { createCustomError } = require("../utils/customApiError");

const getAllTodos = asyncWrapper(async (req, res) => {
	const todos = await Todo.find({});
	if (todos) {
		res.status(200).json({ todos });
	} else {
		return next(createCustomError(res.statusCode, "No record found"));
	}
});

const createTodo = asyncWrapper(async (req, res) => {
	const todo = await Todo.create(req.body);
	if (todo) {
		res.status(201).json({ todo });
	} else {
		return next(createCustomError(res.statusCode, "No record found"));
	}
});

const getTodoById = asyncWrapper(async (req, res) => {
	const todo = await Todo.findOne({ _id: req.params.id });
	if (!todo) {
		return res.status(404).send({ message: "todo not found" });
	}
	res.status(200).send(todo);
});

const updateTodoById = asyncWrapper(async (req, res) => {
	const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidators: true,
	});
	if (!todo) {
		return res.status(404).send({ message: "todo not found" });
	}
	res.status(200).send(todo);
});

const deleteTodo = asyncWrapper(async (req, res) => {
	const todo = await Todo.deleteOne({ _id: req.params.id });
	if (!todo) {
		return res.status(404).send({ message: "todo not found" });
	}
	res.status(200).send(todo);
});

module.exports = {
	getAllTodos,
	createTodo,
	deleteTodo,
	getTodoById,
	updateTodoById,
};
