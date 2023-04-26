let contador = 0;
let array = [];
let qtdeHomens = 0;
let qtdeMulheres = 0;

function onClick() {
  let idade = document.getElementById("idade").value; //<!--traga o valor
  let sexo = document.getElementById("sexo").value;
  let opiniao = document.getElementById("opiniao").value;
  let respostas = {
    idade: parseInt(idade),
    sexo: sexo,
    opiniao: parseInt(opiniao),
  };

  array.push(respostas);
  if (sexo == "Male") {
    qtdeHomens += 1;
  } else {
    qtdeMulheres += 1;
  }

  console.log(idade);
  alert("Obrigado pela resposta");
  contador += 1; //

  if (contador === 3) {
    console.log("chegou aqui");
    results();
  }

  document.getElementById("idade").value = "";
}

function results() {
  calcMedia();
  maisVelha();
  maisNova();
  contPessimo();
  porcentBomRuim();
  respostasGenero();
}

function calcMedia() {
  let idadeSum = 0;
  array.map((e) => {
    idadeSum += e.idade;
  });
  let avg = idadeSum / array.length;
  let avgRound = Math.round(avg);
  alert("A media da idade dos participantes foi: " + avgRound);
}

function maisVelha() {
  let olderidade = array.map((e) => e.idade).sort()[array.length - 1];
  alert("A pessoa mais velha tem " + olderidade + " anos");
}

function maisNova() {
  let neweridade = array.map((e) => e.idade).sort()[0];
  alert("A pessoa mais nova tem " + neweridade + " anos");
}

function contPessimo() {
  let badopiniaoscontadoridade = 0;
  array.forEach((e) => {
    if (e.opiniao == 1) {
      badopiniaoscontadoridade += 1;
    }
  });
  alert(badopiniaoscontadoridade + " pessoa(s) responderam péssimo");
}

function porcentBomRuim() {
  let respBoas = 0;
  array.forEach((e) => {
    if (e.opiniao == 3 || e.opiniao == 4) {
      respBoas += 1;
    }
  });

  let percentidade = (respBoas * 100) / array.length;
  alert(
    percentidade.toFixed(2) +
      "%" +
      " equivale ao percentual de respostas ótimas e boas"
  );
}

function respostasGenero() {
  alert(
    "Quantidade de homens que responderam a pesquisa: " +
      qtdeHomens +
      "\nQuantidade de mulheres que responderam a pesquisa: " +
      qtdeMulheres
  );
}
