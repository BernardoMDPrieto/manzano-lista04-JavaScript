// Descrição: Pegar o número maior e o menor até ser informado um número negativo
let menor = 0
let maior = 0
let valor = 0
do {
     valor  = parseInt(prompt("Informe um número"))
     if (valor > -1) {
        if (valor > maior) {
            maior = valor
        } else if (menor == 0 || valor < menor){
            menor = valor
        }
    }
}while(valor > -1)
alert(`${maior} é o maior número e ${menor} é o menor`)