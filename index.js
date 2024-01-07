"use strict";

const express = require("express");
const app = express();
const todos = require("./routes/todos");
const connectMongodb = require("./db/connect");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");

// env
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const DBKEY = process.env.MONGODB_ATLAS_KEY;

app.use(express.json());
//routes
app.use("/api/v1/todos", todos);
app.use(notFound);

//middlewares
app.use(errorHandler);

const startApp = async () => {
	try {
		await connectMongodb(DBKEY);
		app.listen(PORT, console.log("server is running"));
	} catch (error) {
		console.log(error);
	}
};

startApp();
