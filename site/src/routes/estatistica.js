var express = require('express')
var router = express.Router()
var estatisticaController = require('../controllers/estatistica')

router.get('/global', function (req, res) {
 estatisticaController.estatisticaGlobal(res)
})

router.post('/pessoal', function (req, res) {
 estatisticaController.estatisticaPessoal(req, res)
})

module.exports = router