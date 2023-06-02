import db from "./dbConnect/dbConnect.js";
import express from 'express';
import routes from "./routes/index.js";
import manipulador404 from "./middlewares/manipulador404.js";
import manipuladorErros from "./middlewares/manipuladorErros.js";
import cors from 'cors';
import { serve, serveFiles, setup } from 'swagger-ui-express'
import swaggerFile from './domain/swagger.json' assert { type: "json" };

db.on('error', () => {
    console.log('conexão com o banco deu erro')
})
db.once('open', () => {
    console.log('conexão com o banco foi um sucesso')
})

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header('access-control-allow-headers', '*');
    app.use(cors());
    next();
});

const opt = {
    swaggerOptions: {
        explorer: true
        //headers: Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers
    }
}
/* Middlewares */
export const noCache = (req, res, next) => {
    res.set('cache-control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    res.set('pragma', 'no-cache')
    res.set('expires', '0')
    res.set('surrogate-control', 'no-store')
    next()
}
//app.use(routes)
app.use('/doc', serve, setup(swaggerFile, true));
routes(app)

app.use(manipulador404)

app.use(manipuladorErros)


export default app