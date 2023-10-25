// Descrição   : Média de todos os números inseridos pelo usuário!
let acumuladora = 0
let media = 0
let contadora = 0
do {
    contadora = parseInt(prompt("Informe o número"))
    if (contadora > -1) {
        acumuladora += contadora
        media += 1
    }
} while (contadora > 0)
let mediaAritmetica = acumuladora / media
alert(`A somatória de todos os números inseridos é ${acumuladora} \n Foram inseridos ${media} números \n A média é ${mediaAritmetica}`)
