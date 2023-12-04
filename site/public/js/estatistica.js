  const ctx = document.getElementById("graficoMaioridade");

  var graficoMaioridade = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Maiores de 18", "Menores de 18"],
      datasets: [
        {
          label: "Números de jogadores",
          backgroundColor: ["rgba(0, 0, 0, 0.7)", "rgba(255, 255, 255, 0.9)"],
          hoverOffset: 4,
          hoverBackgroundColor: ["#000", "rgba(255, 255, 255, 1)"],
          color: "#FFF",
        },
      ],
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
    },
  });

  const plataforma = document.getElementById("plataformaGrafico");

  var plataformaGrafico = new Chart(plataforma, {
    type: "bar",
    data: {
      labels: ["Celular", "Console", "Computador"],
      datasets: [
        {
          label: ["Números de jogadores"],
          data: [],
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          hoverOffset: 4,
          hoverBackgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: 10,
        },
      ],
    },
    options: {
      responsive: false,
      plugins: {
        decimation: {
          enabled: false,
        },
        title: {
          display: true,
          text: "Em qual plataforma você mais jogou?",
          color: "white",
        },
        legend: {
          labels: {
            color: "white",
          },
        },
      },
      scales: {
        y: {
          ticks: {
            color: "white",
          },
        },
        x: {
          ticks: {
            color: "white",
          },
        },
      },
    },
  });

  const estilo = document.getElementById("estiloGrafico");

  var estiloGrafico = new Chart(estilo, {
    type: "bar",
    data: {
      labels: ["Ação", "Aventura", "Exploração", "Raciocínio"],
      datasets: [
        {
          label: ["Números de jogadores"],
          data: [],
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          hoverOffset: 4,
          hoverBackgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: 10,
        },
      ],
    },
    options: {
      responsive: false,
      plugins: {
        title: {
          display: true,
          text: "Qual estilo você mais gosta de jogar?",
          color: "white",
        },
        legend: {
          labels: {
            color: "white",
          },
        },
      },
      scales: {
        y: {
          ticks: {
            color: "white",
          },
        },
        x: {
          ticks: {
            color: "white",
          },
        },
      },
    },
  });

  const horas = document.getElementById("horasGrafico");

  var horasGrafico = new Chart(horas, {
    type: "bar",
    data: {
      labels: ["-Menos de 1h", "Entre 1h e 2h", "Mais de 3h", "Mais de 4h"],
      datasets: [
        {
          label: ["Números de jogadores"],
          data: [],
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          hoverOffset: 4,
          hoverBackgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: 10,
        },
      ],
    },
    options: {
      responsive: false,
      plugins: {
        title: {
          display: true,
          text: "Quantas horas por dia você joga?",
          color: "white",
        },
        legend: {
          labels: {
            color: "white",
          },
        },
      },
      scales: {
        y: {
          ticks: {
            color: "white",
          },
        },
        x: {
          ticks: {
            color: "white",
          },
        },
      },
    },
  });

  const jogo = document.getElementById("jogoGrafico");

  var jogoGrafico = new Chart(jogo, {
    type: "bar",
    data: {
      labels: [
        "Hollow Knight",
        "The Last of Us",
        "Zelda",
        "God od War",
        "Sonic",
        "Mario",
        "Dark Souls",
      ],
      datasets: [
        {
          label: ["Números de jogadores"],
          data: [],
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          hoverOffset: 4,
          hoverBackgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: 10,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: false,
      plugins: {
        title: {
          display: true,
          text: "Selecione um jogo que você mais se identifique:",
          color: "white",
        },
        legend: {
          labels: {
            color: "white",
          },
        },
      },
      scales: {
        y: {
          ticks: {
            color: "white",
          },
        },
        x: {
          ticks: {
            color: "white",
          },
        },
      },
    },
  });

  const periodo = document.getElementById("periodoGrafico");

  var periodoGrafico = new Chart(periodo, {
    type: "bar",
    data: {
      labels: [
        "Comecei desde que nasci",
        "Entre 5 e 10 anos",
        "Depois dos 10 anos",
        "Depois dos 15 anos",
      ],
      datasets: [
        {
          label: ["Números de jogadores"],
          data: [],
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          hoverOffset: 4,
          hoverBackgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: 10,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: false,
      plugins: {
        title: {
          display: true,
          text: "Em qual período da vida você teve o seu primeiro contato com jogos?",
          color: "white",
        },
        legend: {
          labels: {
            color: "white",
          },
        },
      },
      scales: {
        y: {
          ticks: {
            color: "white",
          },
        },
        x: {
          ticks: {
            color: "white",
          },
        },
      },
    },
  });

  fetch("/estatistica/graficoPlataforma", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    response.json().then((json) => {
      plataformaGrafico.data.datasets[0].data.push(json.playerCelular);
      plataformaGrafico.data.datasets[0].data.push(json.playerConsole);
      plataformaGrafico.data.datasets[0].data.push(json.playerPc);
      plataformaGrafico.update();
    });
  });

  fetch("/estatistica/graficoEstilo", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    response.json().then((json) => {
      console.log(json);

      estiloGrafico.data.datasets[0].data.push(json.playerAcao);
      estiloGrafico.data.datasets[0].data.push(json.playerAventura);
      estiloGrafico.data.datasets[0].data.push(json.playerExploracao);
      estiloGrafico.data.datasets[0].data.push(json.playerRaciocinio);

      estiloGrafico.update();
    });
  });

  fetch("/estatistica/graficoHoras", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    response.json().then((json) => {
      console.log(json);

      horasGrafico.data.datasets[0].data.push(json.playerOneHour);
      horasGrafico.data.datasets[0].data.push(json.playerTwoHour);
      horasGrafico.data.datasets[0].data.push(json.playerThreeHour);
      horasGrafico.data.datasets[0].data.push(json.playerFourHour);

      horasGrafico.update();
    });
  });

  fetch("/estatistica/graficoFavorito", {
   method: "get",
   headers: {
     "Content-Type": "application/json",
   },
 }).then((response) => {
   response.json().then((json) => {
     console.log(json);

     jogoGrafico.data.datasets[0].data.push(json.playerHollow);
     jogoGrafico.data.datasets[0].data.push(json.playerLast);
     jogoGrafico.data.datasets[0].data.push(json.playerZelda);
     jogoGrafico.data.datasets[0].data.push(json.playerGod);
     jogoGrafico.data.datasets[0].data.push(json.playerSonic);
     jogoGrafico.data.datasets[0].data.push(json.playerMario);
     jogoGrafico.data.datasets[0].data.push(json.playerDark);

     jogoGrafico.update();
   });
 });

 fetch("/estatistica/graficoPeriodo", {
  method: "get",
  headers: {
    "Content-Type": "application/json",
  },
}).then((response) => {
  response.json().then((json) => {
    console.log(json);

    periodoGrafico.data.datasets[0].data.push(json.playerNascimento);
    periodoGrafico.data.datasets[0].data.push(json.playerFiveYears);
    periodoGrafico.data.datasets[0].data.push(json.playerTenYears);
    periodoGrafico.data.datasets[0].data.push(json.playerFifteenYears);

    periodoGrafico.update();
  });
});