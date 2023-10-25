var contadora = 1
var somatoria = 0
do{
    if (contadora % 2 == 0){
        somatoria = contadora + somatoria
    }
    contadora++
} while(contadora<501)
alert(somatoria)