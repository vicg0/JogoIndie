var express = require('express')
var router = express.Router()

var questionController = require('../controllers/questionController')

router.get('/listQuestions', (req, res) => {
 questionController.listQuestions(res)
})

router.post('/saveQuestionary', (req, res) => {
 questionController.saveQuestionary(req, res)
})

module.exports = router