let contadora = 1

do{
    if(contadora %2 == 1){
        fatorial=1
        valor=1
        do{
            fatorial*=valor
            valor+=1
        }while(valor < contadora+1)
        alert(fatorial)
    }
    contadora++
}while(contadora < 11)
// contadora<-1
// repita
//    se (contadora mod 2 = 1) entao
//       fatorial<-1
//       valor<-1
//       repita
//          fatorial<-fatorial*valor
//          valor<-valor+1
//       ate valor > contadora
//       escreval(fatorial)
//    fimse
//    contadora<-contadora+1
// ate contadora > 10