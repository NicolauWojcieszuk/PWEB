function calcular(){
    var num1 = parseFloat(prompt("Insira o primeiro número:"));
    var num2 = parseFloat(prompt("Insira o segundo número:"));
    var soma = num1 + num2;
    var diferença = num1 - num2;
    var produto = num1 * num2;
    var divisao = num1 / num2;
    var resto = num1 % num2;

    return("Soma = " + soma + " \nDiferença = " + diferença + " \nProduto = " + produto + " \nDivisão = " + divisao +
    " \nResto = " + resto);
}


