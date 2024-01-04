"use strict";

const express = require("express");
const app = express();
const todos = require("./routes/todos");
require("dotenv").config();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());

app.use("/api/v1/todos", todos);

app.listen(PORT, console.log("server is running"));
