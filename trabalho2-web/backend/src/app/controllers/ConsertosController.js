const Conserto = require('../models/Conserto')

class ConsertosController {
    //Listar
    async index(req, res) {
        try {
            const data = await Conserto.findAll({
                limit: 1000,
            })
            return res.json(data)
        } catch (e) {
            console.log("Erro: " + e)
        }
    }

    //Recupera, mostra só um
    async show(req, res) {
        try {
            const id = parseInt(req.params.id)
            const conserto = await Conserto.findByPk(id)
            const status = conserto ? 200 : 404

            return res.status(status).json(conserto)
        } catch (e) {
            console.log("Erro: " + e)
        }
    }

    //Cria
    async create(req, res) {
        try {
            const { name, dono, contato } = req.body
            const novoConserto = await Conserto.create({
                name,
                dono,
                contato
            })
            return res.status(201).json(novoConserto)
        } catch (e) {
            console.log("Erro: " + e)
        }
    }

    //Atualiza
    async update(req, res) {
        try {
            const id = parseInt(req.params.id)
            const { name, dono, contato } = req.body
            const retornoStatus = id >= 0 ? 200 : 400
            const conserto = await Conserto.findByPk(id)
            const novoConserto = await conserto.update({
                name,
                dono,
                contato
            })
            return res.status(retornoStatus).json(novoConserto)
        } catch (e) {
            console.log("Erro: " + e)
        }
    }

    //Deleta
    async destroy(req, res) {
        try {
            const id = parseInt(req.params.id)
            const conserto = await Conserto.findByPk(id)
            const status = id >= 0 ? 200 : 404
            conserto.destroy()
            return res.status(status).json()
        } catch (e) {
            console.log("Erro: " + e)
        }
    }
}

module.exports = new ConsertosController()