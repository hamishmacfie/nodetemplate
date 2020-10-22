const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const express = require("express");
const app = express();

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template Engine
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use("/", require("./routes/router"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
