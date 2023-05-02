function calcRetan() {
    var num1 = prompt("Digite o valor da base: ");
    var num2 = prompt("Digite o valor da altura: ");
  
    var retangulo = new ret(num1, num2);
    return retangulo.calcArea();
  }
  
  function ret(n1, n2) {
    this.base = n1;
    this.altura = n2;
  
    this.calcArea = function () {
      return this.base * this.altura;
    };
  }
  