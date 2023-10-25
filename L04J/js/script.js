let areaTotal = 0
let areaComodo = 0
let resposta
do{
let comodo = prompt("Informe o cômodo: ")
let base = parseInt(prompt("Informe a base: "))
let altura = parseInt(prompt("Informe a altura: "))
    areaComodo=base*altura
    areaTotal+=areaComodo
    alert("A área do comodo "+ comodo +" é "+areaComodo+"m²")
    resposta = prompt("Deseja calcular a area de mais um cômodo (s/n)?")
}while(resposta != "n")
alert("A area total da residência é: "+areaTotal+"m²")