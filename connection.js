// connection.js
const mongoose = require("mongoose");
const connection = "mongodb://mongo:27017/lawfirm";
console.log(connection);
const connectDb = () => {
  return mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};
module.exports = connectDb;
