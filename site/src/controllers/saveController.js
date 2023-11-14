var saveModel = require('../models/saveModel')

function listarSaves(req, res) {
 saveModel.listarSaves(req.body.idUsuario).then(function (resultado) {
  res.json(resultado)
 })
}

function registrarSave(req, res) {
 var idSave = req.body.idSave
 var idUser = req.body.idUsuario
 saveModel.registerSave(idSave, idUser).then(function (resultado) {
  res.json(resultado)
 })
}

function registrarPorcentagem(req, res) {
 var porcentagem = req.body.porcentagem
 var fkUsuario = req.body.fkUsuario
 var idSave = req.body.idSave

 saveModel.registrarPorcentagem(porcentagem, idSave, fkUsuario).then(function (resultado) {
  res.json(resultado)
 })
}

function deleteSave(req, res) {
 var idUser = req.body.idUsuario
 var idSave = req.body.idSave

 saveModel.deleteSave(idSave, idUser).then(resultado => {
  res.json(resultado)
 })
}

module.exports = {
 listarSaves,
 registrarSave,
 registrarPorcentagem,
 deleteSave
}