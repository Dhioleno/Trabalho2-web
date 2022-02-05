const Sequelize = require('sequelize')
const { Model } = require('sequelize')

class Conserto extends Model {
    static init(sequelize) {
        super.init({
                name: Sequelize.STRING,
                dono: Sequelize.STRING,
                contato: Sequelize.INTEGER
            }, {
                sequelize,
            }

        )
    }
    static associate(models) {
        this.hasMany(models.Serviço)
    }
}

module.exports = Conserto