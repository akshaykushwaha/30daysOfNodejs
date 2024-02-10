const express = require("express");

const app = express();

/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res) {
  res.send("Positive Number");
}

function errorHandlingMiddleware(req, res, next) {
  if (+req.query.number >= 0) {
    next();
  } else {
    res.statusCode = 400;
    res.statusMessage = "Negative Number";
    next(new Error("Negative Number"));
  }
}

app.use(errorHandlingMiddleware);

app.get("/positive", positiveIntegerHandler);

app.listen(3000, () => console.log("Port is running on 3000"));
