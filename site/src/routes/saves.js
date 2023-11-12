const express = require('express')
const router = express.Router()

const saveController = require('../controllers/saveController')

router.get('/listar', function (req, res) {
 saveController.listarSaves(res)
})

router.post('/registrar', function (req, res) {
 saveController.registrarSave(req, res)

})

router.delete('/delete', function (req, res) {
 saveController.deleteSave(req, res)
})

module.exports = router