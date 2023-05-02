import mongoose from "mongoose";

mongoose.connect("mongodb+srv://api:YJrfrgLQoyermtNf@api.nxkdqib.mongodb.net/?retryWrites=true&w=majority&ssl=false")
let db = mongoose.connection

export default db
