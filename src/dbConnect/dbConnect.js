import mongoose from "mongoose";
import * as dotenv from 'dotenv'

dotenv.config()
const connectionString = `${process.env.STRING_CONEXAO_DB}`;
mongoose.set('strictQuery', true);
mongoose.set('debug', true);
mongoose.connect(connectionString, {
  ssl: true,
  sslValidate: false
});

let db = mongoose.connection

export default db
