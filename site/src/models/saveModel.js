var database = require("../database/config")

function listarSaves() {
 var instrucao = `SELECT * FROM save;`

 console.log("Executando a instrução SQL: \n" + instrucao);

 return database.executar(instrucao)
}

module.exports = {
 listarSaves
}