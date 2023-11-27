var database = require("../database/config");

function listarSaves(idUsuario) {
  var instrucao = `SELECT * FROM save WHERE fkUsuario = ${idUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}

async function registerSave(idSave, idUser) {
  var randomGeo = Number((Math.random() * 20000).toFixed(0))
  var instrucao = `INSERT INTO save VALUES (${idSave}, ${idUser}, 'Novo Jogo', 0, '00:00:00', ${randomGeo});`;
  console.log("Executando a instrução SQL: \n" + instrucao);

  await database.executar(instrucao);

  instrucao = `SELECT * FROM save where fkUsuario = ${idUser};`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  var selectSave = await database.executar(instrucao);

  return selectSave[selectSave.length - 1];
}

async function registrarPorcentagem(porcentagem, idSave, fkUsuario) {
  var instrucao = `SELECT * FROM save WHERE idSave = ${idSave} AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucao);

  var selectResult = await database.executar(instrucao);

  if (porcentagem < selectResult[0].porcentagem) {
    return false;
  } else {
    var instrucao = `UPDATE save set porcentagem = ${porcentagem} where idSave = ${idSave} AND fkUsuario = ${fkUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
  }
}

function deleteSave(idSave, idUser) {
  var instrucao = `DELETE FROM save where idSave = ${idSave} and fkUsuario = ${idUser};`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listarSaves,
  registerSave,
  registrarPorcentagem,
  deleteSave,
};
