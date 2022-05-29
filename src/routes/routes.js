const express = require("express");
const people = require("../api/people.js");
const middlewareLogger = require("../middlewares/logger.js");
const app = express.Router();

app.use((req, res, next) => middlewareLogger(req, res, next));
app.get("/people", (req, res) => people(req, res));

module.exports = app;
