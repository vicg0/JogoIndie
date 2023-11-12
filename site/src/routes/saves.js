const express = require('express')
const router = express.Router()

const saveController = require('../controllers/saveController')

router.get('/listar', function (req, res) {
 saveController.listarSaves(res)
})

module.exports = router