import mongoose from "mongoose";

mongoose.connect("mongodb+srv://api:YJrfrgLQoyermtNf@api.nxkdqib.mongodb.net/mydatabase", {
  ssl: true,
  sslValidate: false
});

let db = mongoose.connection

export default db
