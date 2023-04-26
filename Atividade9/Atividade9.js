function acharMaior() {
  var num1 = prompt("Digite o primeiro número: ");
  var num2 = prompt("Digite o segundo número: ");
  var num3 = prompt("Digite o terceiro número: ");
  var array = [num1, num2, num3];

  let numMaior = array.sort((a, b) => a - b)[array.length - 1];
  return numMaior;
}

function ordenar() {
  var num1 = prompt("Digite o primeiro número: ");
  var num2 = prompt("Digite o segundo número: ");
  var num3 = prompt("Digite o terceiro número: ");
  var array = [num1, num2, num3];

  let crescente = array.sort((a, b) => a - b);
  return crescente;
}
