//somatória do fatorial de 15 valores numéricos informado pelo usuário

let contadora = 0
let somatoria = 0
do {
    let valor = parseInt(prompt("Digite o valor para saber seu fatorial: "))
    let fatorial = 1
    let contadora1 = 1
    do {
        fatorial *= contadora1
        contadora1++
        alert(fatorial)
    } while (contadora1 < valor+1)
    somatoria += fatorial
    contadora++
} while (contadora < 15)
alert(somatoria)

// repita
// escreval("Digite o valor para saber seu fatorial: ")
// leia(valor)
//     fatorial<-1
//     contadora1<-1
// repita
//     fatorial<-fatorial*contadora1
//     contadora1<-contadora1+1
// ate contadora1 > valor
// somatoria<-somatoria+fatorial
// contadora<-contadora+1
// ate contadora>14
// escreval(somatoria)