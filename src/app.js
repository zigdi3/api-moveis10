import db from "./api/main/config/dbConnect.js";
import express from 'express';
import routes from "./api/main/routes/index.js";
import manipulador404 from "./api/presentation/middlewares/manipulador404.js";
import manipuladorErros from "./api/presentation/middlewares/manipuladorErros.js";
import cors from 'cors';


db.on('error', () => {
    console.log('conexão com o banco deu erro')
})
db.once('open', () => {
    console.log('conexão com o banco foi um sucesso')
})

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});


routes(app)

app.use(manipulador404)

app.use(manipuladorErros)

export default app