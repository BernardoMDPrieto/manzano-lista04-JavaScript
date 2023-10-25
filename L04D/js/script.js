// Descrição   : cálculo somatório de número de grãos de trigo de cada casa do xadrez, aumentando o dobro da casa anterior!contadora<-1
let contadora = 1
let acumuladora = 0

do{
    acumuladora = 2**contadora
    alert(acumuladora)
    contadora++
} while(contadora < 64)
