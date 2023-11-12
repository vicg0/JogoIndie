var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.email
    var senha = req.body.senha

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
                    if(resultadoAutenticar.length == 0) {
                        res.json('Usuário não encontrado')
                    } else if (resultadoAutenticar.length == 1) {
                        res.json({
                            id: resultadoAutenticar[0].idUsuario,
                            nome: resultadoAutenticar[0].nome,
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha,
                            message: 'Usuário cadastrado'
                        })
                    } else {
                        res.json('Existem mais de dois usuários')
                    }
                    
                }

            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                        res.json('Usuário cadastrado');
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    if(erro.sqlMessage == "Check constraint 'chkSenha' is violated.") {
                        res.json('A senha deve no mínimo ter 8 caractéres')
                    } else if(erro.sqlMessage == "Check constraint 'chkEmail' is violated.") {
                        res.json('O email deve ter @')
                    } else {
                        res.json('Algo deu errado')
                    }
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500)
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}