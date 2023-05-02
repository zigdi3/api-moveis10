import mongoose from "mongoose";

mongoose.connect("mongodb+srv://api:YJrfrgLQoyermtNf@api.nxkdqib.mongodb.net/mydatabase", { useNewUrlParser: true, useUnifiedTopology: true, ssl: false, sslValidate: false });
let db = mongoose.connection

export default db
