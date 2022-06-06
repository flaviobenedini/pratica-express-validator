const controller = {}

const { validationResult } = require('express-validator');



controller.index = (req, res) => res.render('index', { title: 'Express' })

controller.add = (req,res) => {
    let erros = validationResult(req).mapped();    
    res.render('index', { title: 'Express' }, erros, {valoresAntigos: req.body})
}

module.exports = controller