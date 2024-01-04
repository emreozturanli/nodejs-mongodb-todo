const express = require("express");
const router = express();

const { getAllTodos, createTodo, deleteTodo, getTodoById, updateTodoById } = require("../controllers/todos");

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getTodoById).patch(updateTodoById).delete(deleteTodo);

module.exports = router;
