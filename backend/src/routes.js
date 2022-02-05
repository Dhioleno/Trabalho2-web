//router é um recurso do Express
const { Router } = require('express')
const routes = new Router()

const consertos = require("./app/controllers/ConsertosController")

routes.get("/consertos", consertos.index)
routes.get("/consertos/:id", consertos.show)
routes.post("/consertos", consertos.create)
routes.put("/consertos/:id", consertos.update)
routes.delete("/consertos/:id", consertos.destroy)


//para exportar esse código para o app.js usar
module.exports = routes