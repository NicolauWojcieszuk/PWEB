function dados() {
    var contaCorrente = new Corrente();
    var contaPoupanca = new Poupanca();
  
    var nomeCorretistaCorrente = prompt(
      "(Corrente) Digite o nome do corretista: "
    );
    var bancoCorrente = prompt("(Corrente) Digite o banco: ");
    var numContaCorrente = prompt("(Corrente) Digite o número da conta: ");
    var saldoCorrente = parseFloat(prompt("(Corrente) Digite o saldo da conta: "));
    var saldoEspec = parseFloat(
      prompt("(Corrente) Digite o saldo especial da conta: ")
    );
  
    var nomeCorretistaPoupanca = prompt(
      "(Poupança) Digite o nome do corretista: "
    );
    var bancoPoupanca = prompt("(Poupança) Digite o banco: ");
    var numContaPoupanca = prompt("(Poupança) Digite o número da conta: ");
    var saldoPoupanca = parseFloat(
      prompt("(Poupança) Digite o saldo da conta: ")
    );
    var juros = parseFloat(prompt("(Poupança) Digite o juros: "));
    var dataVenc = prompt("(Poupança) Digite a data de vencimento: ");
  
    contaCorrente.setNomeCorretista(nomeCorretistaCorrente);
    contaCorrente.setBanco(bancoCorrente);
    contaCorrente.setNumConta(numContaCorrente);
    contaCorrente.setSaldo(saldoCorrente);
    contaCorrente.setSaldoEspecial(saldoEspec);
  
    contaPoupanca.setNomeCorretista(nomeCorretistaPoupanca);
    contaPoupanca.setBanco(bancoPoupanca);
    contaPoupanca.setNumConta(numContaPoupanca);
    contaPoupanca.setSaldo(saldoPoupanca);
    contaPoupanca.setJuros(juros);
    contaPoupanca.setDataVenc(dataVenc);
  
    return alert(
      "Dados da conta corrente: \n\nNome do Corretista: " +
        contaCorrente.getNomeCorretista() +
        "\nBanco: " +
        contaCorrente.getBanco() +
        "\nNúmero da conta: " +
        contaCorrente.getNumConta() +
        "\nSaldo: " +
        contaCorrente.getSaldo() +
        "\nSaldo especial: " +
        contaCorrente.getSaldoEspecial() +
        "\n\nDados da conta poupança: \n\nNome do Corretista: " +
        contaPoupanca.getNomeCorretista() +
        "\nBanco: " +
        contaPoupanca.getBanco() +
        "\nNúmero da conta: " +
        contaPoupanca.getNumConta() +
        "\nSaldo: " +
        contaPoupanca.getSaldo() +
        "\nTaxa de juros: " +
        contaPoupanca.getJuros() +
        "\nData de vencimento: " +
        contaPoupanca.getDataVenc()
    );
  }
  
  function Conta() {
    var nomeCorretista;
    var banco;
    var numConta;
    var saldo;
  
    this.setNomeCorretista = function (value) {
      this.nomeCorretista = value;
    };
    this.getNomeCorretista = function () {
      return this.nomeCorretista;
    };
  
    this.setBanco = function (value) {
      this.banco = value;
    };
    this.getBanco = function () {
      return this.banco;
    };
  
    this.setNumConta = function (value) {
      this.numConta = value;
    };
    this.getNumConta = function () {
      return this.numConta;
    };
  
    this.setSaldo = function (value) {
      this.saldo = value;
    };
    this.getSaldo = function () {
      return this.saldo;
    };
  }
  
  function Corrente() {
    var saldoEspecial;
    this.setSaldoEspecial = function (value) {
      this.saldoEspecial = value;
    };
    this.getSaldoEspecial = function () {
      return this.saldoEspecial;
    };
  }
  
  function Poupanca() {
    var juros;
    var dataVenc;
  
    this.setJuros = function (value) {
      this.juros = value / 100;
    };
    this.getJuros = function () {
      return this.juros;
    };
  
    this.setDataVenc = function (value) {
      this.dataVenc = value;
    };
    this.getDataVenc = function () {
      return this.dataVenc;
    };
  }
  
  Corrente.prototype = new Conta();
  Poupanca.prototype = new Conta();