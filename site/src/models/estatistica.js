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

async function estatisticaPlataformaGrafico() {
  var instrucao = `select count(fkUsuario) qtdPlayersConsole from questionary where respostaQuestion = 'Console';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerConsole = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersPc from questionary where respostaQuestion = 'PC';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerPc = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersCelular from questionary where respostaQuestion = 'Celular';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerCelular = await database.executar(instrucao);
  return {
    playerConsole: playerConsole[0].qtdPlayersConsole,
    playerPc: playerPc[0].qtdPlayersPc,
    playerCelular: playerCelular[0].qtdPlayersCelular
  }
}

async function estatisticaEstiloGrafico() {
  var instrucao = `select count(fkUsuario) qtdPlayersAcao from questionary where respostaQuestion = 'Ação';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerAcao = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersAventura from questionary where respostaQuestion = 'Aventura';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerAventura = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersExploracao from questionary where respostaQuestion = 'Exploração';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerExploracao = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersRaciocinio from questionary where respostaQuestion = 'Raciocínio';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerRaciocinio = await database.executar(instrucao);

  return {
    playerAcao: playerAcao[0].qtdPlayersAcao,
    playerAventura: playerAventura[0].qtdPlayersAventura,
    playerExploracao: playerExploracao[0].qtdPlayersExploracao,
    playerRaciocinio: playerRaciocinio[0].qtdPlayersRaciocinio,
  }
}

async function estatisticaHorasGrafico() {
  var instrucao = `select count(fkUsuario) qtdPlayersOneHour from questionary where respostaQuestion = '-Menos de 1h';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerOneHour = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersTwoHour from questionary where respostaQuestion = 'Entre 1h e 2h';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerTwoHour = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersThreeHour from questionary where respostaQuestion = 'Mais de 3h';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerThreeHour = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersFourHour from questionary where respostaQuestion = 'Mais de 4h';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerFourHour = await database.executar(instrucao);

  return {
    playerOneHour: playerOneHour[0].qtdPlayersOneHour,
    playerTwoHour: playerTwoHour[0].qtdPlayersTwoHour,
    playerThreeHour: playerThreeHour[0].qtdPlayersThreeHour,
    playerFourHour: playerFourHour[0].qtdPlayersFourHour,
  }
}

async function estatisticaFavoritoGrafico() {
  var instrucao = `select count(fkUsuario) qtdPlayersHollow from questionary where respostaQuestion = 'Hollow Knight';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerHollow = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersLast from questionary where respostaQuestion = 'The Last of Us';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerLast = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersZelda from questionary where respostaQuestion = 'Zelda';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerZelda = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersGod from questionary where respostaQuestion = 'God od War';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerGod = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersSonic from questionary where respostaQuestion = 'Sonic';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerSonic = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersMario from questionary where respostaQuestion = 'Mario';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerMario = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersDark from questionary where respostaQuestion = 'Dark Souls';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerDark = await database.executar(instrucao);

  return {
    playerHollow: playerHollow[0].qtdPlayersHollow,
    playerLast: playerLast[0].qtdPlayersLast,
    playerZelda: playerZelda[0].qtdPlayersZelda,
    playerGod: playerGod[0].qtdPlayersGod,
    playerSonic: playerSonic[0].qtdPlayersSonic,
    playerMario: playerMario[0].qtdPlayersMario,
    playerDark: playerDark[0].qtdPlayersDark,
  }
}

async function estatisticaPeriodoGrafico() {
  var instrucao = `select count(fkUsuario) qtdPlayersNascimento from questionary where respostaQuestion = 'Comecei desde que nasci';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerNascimento = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersFiveYears from questionary where respostaQuestion = 'Entre 5 e 10 anos';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerFiveYears = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersTenYears from questionary where respostaQuestion = 'Depois dos 10 anos';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerTenYears = await database.executar(instrucao);

  var instrucao = `select count(fkUsuario) qtdPlayersFifteenYears from questionary where respostaQuestion = 'Depois dos 15 anos';`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  var playerFifteenYears = await database.executar(instrucao);

  return {
    playerNascimento: playerNascimento[0].qtdPlayersNascimento,
    playerFiveYears: playerFiveYears[0].qtdPlayersFiveYears,
    playerTenYears: playerTenYears[0].qtdPlayersTenYears,
    playerFifteenYears: playerFifteenYears[0].qtdPlayersFifteenYears,
  }
}

module.exports = {
  estatisticaGlobal,
  estatisticaPessoal,
  estatisticaPlataformaGrafico,
  estatisticaEstiloGrafico,
  estatisticaHorasGrafico,
  estatisticaFavoritoGrafico,
  estatisticaPeriodoGrafico
};
