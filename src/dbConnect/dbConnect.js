import mongoose from "mongoose";

mongoose.connect("mongodb+srv://api:YJrfrgLQoyermtNf@api.nxkdqib.mongodb.net/?retryWrites=true&w=majority")
let db = mongoose.connection

export default db
