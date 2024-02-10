const express = require("express");

const app = express();

app.use(requestLoggerMiddleware);

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req, res, next) {
  console.log(`${new Date().toISOString()} - ${req.method} request received`);
  next();
}

app.get("/", (req, res) => {
  res.send("Hello, Guest!");
});

app.listen(3000, () => console.log("Port is running on 3000"));
