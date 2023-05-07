import express from 'express';

const envRouter = express.Router()
envRouter
  .get('/env-variables', (req, res) => {
    // #swagger.tag = ['Maintance']
    // #swagger.description = 'Lista variaveis de ambiente'

    res.json({
      data: {
        DATE_STRING: new Date().toString(),
        DATE_ISO_STRING: new Date().toISOString(),

        ...process.env
      }
    })
  })
export default envRouter
