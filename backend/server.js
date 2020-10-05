// Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const path = require("path");
const cors = require("cors");

let request = require("request");

// initializing dotenv
const dotenv = require("dotenv");
dotenv.config();

// initializing express
const app = express();

// Routes
const authRoutes = require("");
const userRoutes = require("");

// Middleware
app.use(morgan());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Mongoose

// Port
const port = process.env.PORT || 1010;

// Server
app.listen(port, () => {
  console.log(`App is running on Port ${port}`);
});
