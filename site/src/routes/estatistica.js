var express = require('express')
var router = express.Router()
var estatisticaController = require('../controllers/estatistica')

router.get('/global', function (req, res) {
 estatisticaController.estatisticaGlobal(res)
})

router.post('/pessoal', function (req, res) {
 estatisticaController.estatisticaPessoal(req, res)
})

router.get('/graficoPlataforma', function (req, res) {
 estatisticaController.estatisticaPlataformaGrafico(res)
})

router.get('/graficoEstilo', function (req, res) {
 estatisticaController.estatisticaEstiloGrafico(res)
})

router.get('/graficoHoras', function (req, res) {
 estatisticaController.estatisticaHorasGrafico(res)
})

router.get('/graficoFavorito', function (req, res) {
 estatisticaController.estatisticaFavoritoGrafico(res)
})

router.get('/graficoPeriodo', function (req, res) {
 estatisticaController.estatisticaPeriodoGrafico(res)
})

module.exports = router