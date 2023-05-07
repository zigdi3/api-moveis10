import app from "./src/app.js";

import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './src/api/main/swagger.json' assert { type: "json" };

const port = process.env.PORT || 3000



app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
    console.log('servidor rodando na porta', port)
})