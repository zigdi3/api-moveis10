import express from 'express'
import Movel from './movel.route.js'


const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "moveis" });
  })

  app.use(
    express.json(),
    Movel,
  )
}

export default routes