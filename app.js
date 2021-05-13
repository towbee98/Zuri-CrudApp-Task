const express = require("express");
const app = express();
app.use(express.json()); //this middleware enables us to access the validation details
// app.use(express.urlencoded({ extended: true }));
const router = require("./routes");

//Route Handler for getting all data and creating new data

app.use("/api/users", router); //this middleware handles the specified routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: `Welcome this is the Zuri Crud App Task for Nodejs Intern 🔥 🔥 🔥. I made an error when
      trying to submit. I submitted the hosted link instead of the github link.
       Here's the github link : https://github.com/towbee98/Zuri-CrudApp-Task .I apologize for the inconvenience`,
  });
});
//Creates a route handler to handle all routes not defined in the above middleware
app.all("*", (req, res) => {
  res.status(404).json({
    message: "Sorry the page you requested for cannot be found 😦 ",
  });
});

module.exports = app;
