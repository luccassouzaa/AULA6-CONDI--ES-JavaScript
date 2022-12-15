// Condição

var isActive = true
var menssagem = ""

if(isActive){
    menssagem = "Está ativo"
}else{
    menssagem = "Não está ativo"
}

console.log(menssagem)

// ------------------------- //

var semaforo = "verde"
var menssagem2 = ""

if (semaforo == "verde"){
    menssagem2 = "Pode passar" 
} else if(semaforo == "amarelo"){
    menssagem2 = "Atenção, está fechando o sinal, reduza a velocidade"
}else if (semaforo == "vermelho"){
    menssagem2 = "Pare!"
} else{
    menssagem2 = "Valor inválido!"
}

console.log(menssagem2)

// ------------------------- //

switch (semaforo){
    case 'verde':
        menssagem2 = "Pode passar"
        break
    case 'amarelo':
        menssagem2 = "Atenção, está fechando o sinal, reduza a velocidade"
        break
    case 'vermelho':
        menssagem2 = "Pare!"
        break
    default:
        menssagem2 = 'Valor inválido!'
}

console.log(menssagem2)