function jogar(){
    const opcoes = {
        1: 'Pedra',
        2: 'Papel',
        3: 'Tesoura'
    }
    var personChoiceNumber = prompt("Pedra, Papel ou Tesoura? Escolha: \n1 = Pedra\n2 = Papel\n3 = Tesoura").toUpperCase();
    var machineChoiceNumber = Math.floor(Math.random() * 3 +1);
    var personChoice = opcoes[personChoiceNumber];
    var machineChoice = opcoes[machineChoiceNumber];
    var winner;

    alert("A escolha da pessoa foi: " + personChoice);
    alert("A escolha da máquina foi: " + machineChoice);

    //Compara para ver se empatou
    if(personChoiceNumber == machineChoiceNumber){
        winner = 'Empate'
    }else 
    //Caso de ser 1 e 2 independente de lados - o 2 ganha
    if((personChoiceNumber == 1 && machineChoiceNumber == 2) || (personChoiceNumber == 2 && machineChoiceNumber == 1)){
        personChoiceNumber == 2 ? winner = "Pessoa" : winner = "Máquina"
    }else 
    //Caso de ser 1 e 3 independente de lados - o 1 ganha
    if((personChoiceNumber == 1 && machineChoiceNumber == 3) || (personChoiceNumber == 3 && machineChoiceNumber == 1)){
        personChoiceNumber == 1 ? winner = "Pessoa" : winner = "Máquina"
    }else 
    //Caso de ser 2 e 3 independente de lados - o 3 ganha
    if((personChoiceNumber == 2 && machineChoiceNumber == 3) || (personChoiceNumber == 3 && machineChoiceNumber == 2)){
        personChoiceNumber == 3 ? winner = "Pessoa" : winner = "Máquina"
    }
    
    return winner;
}


