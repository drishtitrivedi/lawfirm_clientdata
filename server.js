const mongoose = require("mongoose");
const express = require("express");
const lawyerRouter = require("./routes/lawyer");
const clientRouter = require("./routes/clients");
const app = express();

mongoose
  .connect("mongodb://localhost/lawfirm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error in connection: ", err));

app.use(express.json());

// Routes for Lawyers
app.use("/api/lawyers", lawyerRouter);

const newLocal = "/api/clients";
// Routes for Clients
app.use(newLocal, clientRouter);

// Listning PORT
const port = 4000;
app.listen(port, () => console.log(`Listening to port ${port}`));
