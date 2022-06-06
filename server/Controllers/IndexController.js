const controller = {}

const { validationResult } = require('express-validator');



controller.index = (req, res) => res.render('index', { title: 'Express' })

controller.add = (req,res) => {
    let erros = validationResult(req); 
    if (!erros) {
        res.render('index', { title: 'Express', erros: erros.errors, valoresAntigos: req.body})
    } else {
        res.send(req.body)
    }
}

module.exports = controller