import express from 'express'
import Movel from './movel.route.js'
import envRouter from './maintance.default.js';

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "api running!" });
  })
  app.use(
    express.json(),
    envRouter,
    Movel,

  )
}

export default routes