const Sequelize = require('sequelize')

const config = require('../config/database')

const Conserto = require('../app/models/Conserto')

const models = [Conserto]

class Database {
    constructor() {
        this.connection = new Sequelize(config)
        this.init()
    }
    init() {
        models.forEach(model => model.init(this.connection))
    }
}

module.exports = new Database()