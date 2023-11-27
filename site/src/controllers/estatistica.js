var estatisticaModel = require('../models/estatistica')

function estatisticaGlobal (res) {
 estatisticaModel.estatisticaGlobal().then(function (resultado) {
  res.json(resultado)
 })
}

function estatisticaPessoal(req, res) {
 var idUsuario = req.body.idUsuario
 estatisticaModel.estatisticaPessoal(idUsuario).then(function (resultado) {
  res.json(resultado)
 })
}

function estatisticaGrafico(res) {
 estatisticaModel.estatisticaGrafico().then(response => {
  res.json(response)
 })
}

module.exports = {
 estatisticaGlobal,
 estatisticaPessoal,
 estatisticaGrafico
}