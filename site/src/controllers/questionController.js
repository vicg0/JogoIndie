var questionModel = require('../models/questionModel')

function listQuestions(res) {
 questionModel.listQuestions().then(response => {
  res.json(response)
 })
}

function saveQuestionary(req, res) {
 var questionary = req.body.questionary

 for(var incremento = 0; incremento < questionary.length; incremento++) {
  questionModel.saveQuestionary(questionary[incremento].fkUsuario, questionary[incremento].fkQuestion, questionary[incremento].respostaQuestion)
 }

 res.json('dados inseridos')
}

module.exports = {
 listQuestions,
 saveQuestionary
}