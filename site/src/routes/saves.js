const express = require('express')
const router = express.Router()

const saveController = require('../controllers/saveController')

router.post('/listar', function (req, res) {
 saveController.listarSaves(req, res)
})

router.post('/registrar', function (req, res) {
 saveController.registrarSave(req, res)

})

router.post('/porcentagem', function (req, res) {
 saveController.registrarPorcentagem(req, res)

})

router.delete('/delete', function (req, res) {
 saveController.deleteSave(req, res)
})

module.exports = router