import mongoose from "mongoose";

function mongoDbConnection() {
  mongoose
    .connect("mongodb://localhost:27017/loginDB")
    .then(() => {
      console.log("Connection to db success!");
    })
    .catch((err) => {
      console.log("Could not connect to DB", err);
    });
}
export default mongoDbConnection;
