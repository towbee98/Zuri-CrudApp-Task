//Modules
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); //Create access to data stored in .env files

const app = require("./app.js");
const connectionString = process.env.DATABASE;
const PORT = process.env.PORT || 4444;

//Setup database connection
mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

//Listen to the port
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
