import Movel from "../models/movelModel.js";

class MovelController {
    static listarMovel = async (req, res, next) => {
        try {
            let movel = await Movel.find();
            res.status(200).send(movel)
        } catch (erro) {
            next(erro)
        }
    }
        
    static ListarMovelPorId = async  (req, res, next) => {
        try {
            const id = req.params.id
            const MovelResultado = await Movel.findById(id)

            if (MovelResultado !== null) {
                res.status(200).send(MovelResultado)
            } else {
                res.status(500).send({message: 'não encontrado'})
            } 
        } catch (erro) {
            next(erro)
        }
    }
    static CadastrarMovel = async (req, res, next) => {
        try {
            let movel = new Movel(req.body)

            const movelResultado = await movel.save()
            
            res.status(201).send(movelResultado.toJSON())

        } catch (erro) {
            next(erro)
        }
    }
    static AtualizarMovel = async (req, res, next) => {
        try {
            const id = req.params.id
            const movelResultado = await Movel.findByIdAndUpdate(id, {$set: req.body});
            if (movelResultado !== null) {
                res.status(200).send({message: 'movel atualizado com sucesso'})
            } else {
                res.status(500).send({message: 'não achamos'})
            } 
        } catch (erro) {
            next(erro)
        }
    }
    static ExcluirMovel = async (req, res, next) => {
        try {
            const id = req.params.id
            const movelResultado = await Movel.findByIdAndDelete(id)
            if (movelResultado !== null) {
                    res.status(200).send({message: 'movel removido com sucesso'})
            } else {
                res.status(500).send({message: 'der dados validos'})
            }
        } catch (erro) {
            next(erro)
       }
    }
}

export default MovelController

