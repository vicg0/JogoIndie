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

function estatisticaPlataformaGrafico(res) {
 estatisticaModel.estatisticaPlataformaGrafico().then(response => {
  res.json(response)
 })
}

function estatisticaEstiloGrafico(res) {
 estatisticaModel.estatisticaEstiloGrafico().then(response => {
  res.json(response)
 })
}

function estatisticaHorasGrafico(res) {
 estatisticaModel.estatisticaHorasGrafico().then(response => {
  res.json(response)
 })
}

function estatisticaFavoritoGrafico(res) {
 estatisticaModel.estatisticaFavoritoGrafico().then(response => {
  res.json(response)
 })
}

function estatisticaPeriodoGrafico(res) {
 estatisticaModel.estatisticaPeriodoGrafico().then(response => {
  res.json(response)
 })
}

module.exports = {
 estatisticaGlobal,
 estatisticaPessoal,
 estatisticaPlataformaGrafico,
 estatisticaEstiloGrafico,
 estatisticaHorasGrafico,
 estatisticaFavoritoGrafico,
 estatisticaPeriodoGrafico
}