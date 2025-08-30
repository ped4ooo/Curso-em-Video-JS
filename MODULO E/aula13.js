//Estrutura de repetição com teste no início
var contagem = 0
while (contagem < 9){
    console.log('Olá, tudo certo?')
    contagem++
}
console.log(`Encerrou! A contagem parou em ${contagem}.`)


//Estrutura de repetição com teste no final
var contando = 0
do {
    console.log(`A contagem está em ${contando}`)
    contando++
} while (contando < 9)

console.log(`Encerrou! A contagem parou em ${contando}.`)
