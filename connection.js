// connection.js
const mongoose = require("mongoose");
const connection = "mongodb://localhost:27017/lawfirm";
const connectDb = () => {
  return mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};
module.exports = connectDb;
