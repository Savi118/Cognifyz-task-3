// Core Modules
const express = require("express");
const path = require("path");

// App
const app = express();
const PORT = 3000;

// Local Module
const homeRouter = require("./routes/homeRoute");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);

app.listen(PORT, () => {
  console.log(`Your app is running on https://localhost:${PORT}`);
});
