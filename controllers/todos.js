const getAllTodos = (req, res) => {
	res.send("all todos here");
};
const createTodo = (req, res) => {
	res.json(req.body);
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
