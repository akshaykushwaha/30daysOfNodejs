const express = require("express");

const app = express();

/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function greetHandler(req, res) {
  res.send(`Hello, ${req.query.name ?? "Guest"}!`);
}

app.get("/greet", greetHandler);

app.listen(3000, () => console.log("Port is running on 3000"));
