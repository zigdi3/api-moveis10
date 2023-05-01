import mongoose from "mongoose";

mongoose.connect("mongodb+srv://leolucasbr89:eybxcMHeeEqlgsnN@leolucasbr89.bkntzyr.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection

export default db
