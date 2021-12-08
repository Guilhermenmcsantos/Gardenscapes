// Programa: o usuario tem que acertar o valor que o computador ta pensando

let random = parseInt(Math.random() * 100);
console.log(random);

while(true){
    let numero = parseInt(prompt("Acerte o numero que estou pensando ou digite '-1' para conseguir entrar"))

    if (numero ==-1){ //criterio de saida
        break;
    }

    if(numero == random){
        alert("Parabens voce acertou!");
        break;
    }
    else if(numero < random) {
        alert("Tente um valor maior...");
    }
    else{ //é maior então...
        alert("Tente um valor menor");
    }
}

alert("Fim de jogo");