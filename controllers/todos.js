const Todo = require("../models/todos");

const getAllTodos = (req, res) => {
	res.send("all todos here");
};
const createTodo = async (req, res) => {
	const todo = await Todo.create(req.body);
	res.status(201).json({ todo });
};
const getTodoById = (req, res) => {
	res.send("single todo here");
};
const updateTodoById = (req, res) => {
	res.send("todo updated");
};
const deleteTodo = (req, res) => {
	res.send("todo deleted");
};

module.exports = {
	getAllTodos,
	createTodo,
	deleteTodo,
	getTodoById,
	updateTodoById,
};
