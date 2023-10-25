//Descrição: apresentar todos números divididos por 4 menores que 200
let contadora = 1
do{
    if(contadora%4 == 0){
        alert(contadora)
    }
    contadora++
}while(contadora < 200)