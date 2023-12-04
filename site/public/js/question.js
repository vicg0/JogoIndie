var tiposPerguntas = [];
fetch("/question/listQuestions", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then((response) => {
  response.json().then((json) => {
    console.log(json);

    for (var pergunta = 0; pergunta < json.length; pergunta++) {
      questionario.innerHTML += `
        <div class="campoPergunta">
              <h2>${json[pergunta].doubt}</h2>
              <div id="campoRespostas${
                pergunta + 1
              }" class="campoRespostas"></div>
                </div>
              `;

      for (
        var resposta = 0;
        resposta < json[pergunta].resposta.length;
        resposta++
      ) {
        var valorResposta = json[pergunta].resposta[resposta].result;
        var idAnswer = json[pergunta].resposta[resposta].idAnswer;
        var idResposta = json[pergunta].resposta[resposta].idAnswer;
        var grupoResposta = json[pergunta].resposta[resposta].grupoAnswer;
        if (
          tiposPerguntas[pergunta] !=
          json[pergunta].resposta[resposta].grupoAnswer
        ) {
          tiposPerguntas.push(grupoResposta);
        }

        var campoRespostas = document.getElementById(
          `campoRespostas${pergunta + 1}`
        );
        campoRespostas.innerHTML += `
          <div class="resposta">
            <label for="${grupoResposta + idResposta}">
                  <input
                    type="radio"
                    id="${grupoResposta + idResposta}"
                    type="text"
                    name="${grupoResposta}"
                    value="${valorResposta};${json[pergunta].idQuestion}"
                  />
                  ${valorResposta}</label>
                </div>
          `;
      }
    }

    questionario.innerHTML += `<button onclick="saveQuestionary()" class="buttonQuestionario">Enviar</button>`;
  });
});

var respostas = [];

function saveQuestionary() {
  for (var documento = 0; documento < tiposPerguntas.length; documento++) {
    var documentName = document.getElementsByName(tiposPerguntas[documento]);

    for (
      var respostaSelecionada = 0;
      respostaSelecionada < documentName.length;
      respostaSelecionada++
    ) {
      if (documentName[respostaSelecionada].checked) {
        var separarValue = documentName[respostaSelecionada].value.split(";");
        var respostaQuestion = separarValue[0];
        var fkQuestion = separarValue[1];
        var objectResposta = {
          fkUsuario: sessionStorage.ID_USUARIO,
          respostaQuestion: respostaQuestion,
          fkQuestion: fkQuestion,
        };

        respostas.push(objectResposta);
      }
    }
  }
  if (respostas.length < 5) {
    alert("Insira todos os campos");
  } else {
    fetch("/question/saveQuestionary", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questionary: respostas,
      }),
    }).then((response) => {
      response.json().then((json) => {
        alert(json);
        // console.log(json);
      });
    });
  }
  console.log(respostas);
}