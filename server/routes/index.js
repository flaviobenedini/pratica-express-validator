const controller = require('../Controllers/IndexController')
var express = require('express');
var router = express.Router();

const {check} = require('express-validator')

const validatorIndex = [
  check('nome', 'O nome precisa ser preenchido').not().isEmpty(),
  check('email', 'Precisa ser digitado um email válido').isEmail(),
  check('senha', 'A senha precisa ter, no mínimo 6 dígitos').isLength({min: 6})
]

/* GET home page. */
router.get('/', controller.index)
router.post('/', validatorIndex, controller.add)


module.exports = router;
