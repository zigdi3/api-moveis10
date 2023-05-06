import mongoose from "mongoose";

const connectionString = "${{ secrets.DATABASE_URL }}";
mongoose.set('strictQuery', true);
mongoose.set('debug', true);
mongoose.connect(connectionString, {
  ssl: true,
  sslValidate: false
});

let db = mongoose.connection

export default db
