const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//const Promise = require("bluebird");

var boardRouter = require("./routes/board");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Use logging and set settings - default
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", boardRouter);

app.get("/", function (req, res, next) {
  res.render("layout", {
    rows: [{ num: 0 }, { num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }]
  });
});

// Connect to database
const db = require("./db");
db.connect(db.urlbuilder(), function (err) {
  if (err) {
    console.log("Unable to connect to Mongo.");
    process.exit(1);
  }
});

// Catch 404 and forward to error handler - default
app.use(function (req, res, next) {
  next(createError(404));
});

// Register error handler - default
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(8080);
