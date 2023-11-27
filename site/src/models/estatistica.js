var database = require("../database/config");

async function estatisticaGlobal() {
  var instrucao = `select count(*) QuantidadeJogadores from usuario;`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var totalPlayers = await database.executar(instrucao);

  var instrucao = `select count(*) as QuantidadeJogadores from usuario join save on fkUsuario = idUsuario where save.porcentagem = 100;`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerWithHundredPorcent = await database.executar(instrucao);

  
  var instrucao = `select count(*) as QuantidadeJogadores from usuario join save on fkUsuario = idUsuario where save.porcentagem = 100;`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerWithHundredPorcent = await database.executar(instrucao);

  var instrucao = `select count(*) idade from usuario where timestampdiff(year, dtNasc, now()) > 18;`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var qtdPlayerDeMaior = await database.executar(instrucao);

  // Jogadores que terminarem em menos de 5 minutos
  // var instrucao = `select count(*) from usuario join save  on fkUsuario = idUsuario where save.porcentagem = 100;`
  // console.log("Executando a instrução SQL: \n" + instrucao);
  // var playerEndedInFiveMin = await database.executar(instrucao)

  return {
   totalPlayers: totalPlayers[0].QuantidadeJogadores,
   playersWithHundredPorcent: playerWithHundredPorcent[0].QuantidadeJogadores,
   playersDeMaior: qtdPlayerDeMaior[0].idade
 };
}

async function estatisticaPessoal(idUsuario) {
  var instrucao = `select count(*) QuantidadeJogos from usuario usu 
 join save sa on fkUsuario = idUsuario where sa.porcentagem = 100 and usu.idUsuario = ${idUsuario};`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var quantidadeJogosCemPorcento = await database.executar(instrucao);

  var instrucao = `select sum(geo) TotalGeo from save where fkUsuario = ${idUsuario};`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var totalGeoColetado = await database.executar(instrucao);
  
  return {
   quantidadeJogosCemPorcento: quantidadeJogosCemPorcento[0].QuantidadeJogos,
   totalGeoColetado: Number(totalGeoColetado[0].TotalGeo)
  }
}

module.exports = {
  estatisticaGlobal,
  estatisticaPessoal
};
