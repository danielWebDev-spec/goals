const express = require("express");
const connectDB = require("./config/db.js");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware.js");

// Connect MongoDB
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/goals", require("./routes/goalRoutes.js"));

app.use(errorHandler);

// Express Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`.red));
