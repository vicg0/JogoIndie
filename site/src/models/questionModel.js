var database = require('../database/config')

async function listQuestions() {
 var instrucao = `select idQuestion, doubt, '' as resposta from question;`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var selectQuestion = await database.executar(instrucao);
  for(var incremento = 0; incremento < selectQuestion.length; incremento++) {
    var selectAnswer = await database.executar(`select * from answer where fkQuestion = ${selectQuestion[incremento].idQuestion};`)
    selectQuestion[incremento].resposta = selectAnswer
  }
  return selectQuestion
}

async function saveQuestionary(fkUsuario, fkQuestion, respostaQuestion) {
  var instrucao = `select * from questionary where fkUsuario = ${fkUsuario} and fkQuestion = ${fkQuestion};`
  console.log("Executando a instrução SQL: \n" + instrucao);

  var existResposta = await database.executar(instrucao)

  if(existResposta.length > 0) {
    var instrucao = `update questionary set respostaQuestion = '${respostaQuestion}' where fkUsuario = ${fkUsuario} and fkQuestion = ${fkQuestion};`
  } else {
    var instrucao = `insert into questionary (fkUsuario, fkQuestion, respostaQuestion) values (${fkUsuario}, ${fkQuestion}, '${respostaQuestion}');`
  }
  
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao)
}

module.exports = {
 listQuestions,
 saveQuestionary
}