const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb+srv://projectminggu6raka:projectminggu6raka@cluster0.eloac4s.mongodb.net/?retryWrites=true&w=majority")
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("Connection error while connecting to MongoDB", err);
});

module.exports = connect;