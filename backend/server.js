const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/goals", require("./routes/goalRoutes.js"));

app.use(errorHandler);

// Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
