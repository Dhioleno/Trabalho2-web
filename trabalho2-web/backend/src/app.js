const express = require('express')
const routes = require('./routes')
require('./database')

class App {
    constructor() {
        //dando uma ideia de serveer=servidor, é tipo o app que usamos antes
        this.server = express()
        this.middlewares()
        this.routes()
    }

    //função, faz a intermediação entre cliente e servidor
    middlewares() {
        this.server.use(express.json())
    }
    routes() {
        this.server.use(routes)
    }
}

module.exports = new App().server