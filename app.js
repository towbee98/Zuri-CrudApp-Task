const express = require("express");
const app = express();
app.use(express.json()); //this middleware enables us to access the validation details
const router = require("./routes");

//Route Handler for getting all data and creating new data
app.use("/api/users", router); //this middleware handles the specified routes

//Creates a route handler to handle all routes not defined in the above middleware
app.all("*", (req, res) => {
  res.status(404).json({
    message: "Sorry the page you requested for cannot be found",
  });
});

module.exports = app;
