import app from "./src/app.js";
import * as dotenv from 'dotenv'


dotenv.config()

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`\n\n API moveis v1 \n ambiente: ${process.env.NODE_ENV} ,  porta: ${port} , \n `)
})

