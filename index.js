"use strict";

const express = require("express");
const app = express();
const todos = require("./routes/todos");
const connectMongodb = require("./db/connect");

// env
require("dotenv").config();
const PORT = process.env.PORT;
const DBKEY = process.env.MONGODB_ATLAS_KEY;

//middlewares
app.use(express.json());

app.use("/api/v1/todos", todos);

const startApp = async () => {
	try {
		await connectMongodb(DBKEY);
		app.listen(PORT, console.log("server is running"));
	} catch (error) {
		console.log(error);
	}
};

startApp();
