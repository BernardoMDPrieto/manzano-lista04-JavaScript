let quociente  = 0
let valorDividendo = 0
let resposta

do{
    quociente = 0
    let dividendo = parseInt(prompt("Informe o dividendo: "))
    let divisor = parseInt(prompt("Informe o divisor: "))
    valorDividendo = dividendo
        do{
            dividendo-=divisor
            quociente++
        }while(dividendo > 0)
    alert(`${valorDividendo} dividido por ${divisor} é igual a ${quociente}`)
    resposta = prompt(`Deseja efetuar mais uma divisão? (s/n)`)
}while(resposta != "n")