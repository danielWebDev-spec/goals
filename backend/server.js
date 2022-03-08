const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/goals", require("./routes/goalRoutes.js"));

// Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
