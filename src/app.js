import db from "./dbConnect/dbConnect.js";
import express from 'express';
import routes from "./routes/index.js";
import manipulador404 from "./middlewares/manipulador404.js";
import manipuladorErros from "./middlewares/manipuladorErros.js";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json' assert { type: "json" };

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

/* Middlewares */
//app.use(routes)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

routes(app)

app.use(manipulador404)

app.use(manipuladorErros)


export default app