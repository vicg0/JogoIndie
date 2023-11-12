var saveModel = require('../models/saveModel')

function listarSaves(res) {
 saveModel.listarSaves().then(function (resultado) {
  res.json(resultado)
 })
}

module.exports = {
 listarSaves
}