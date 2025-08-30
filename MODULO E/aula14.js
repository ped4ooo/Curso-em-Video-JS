// Utilizando estrutura de repetição com 'while'

var carga = 10
while (carga < 100){
    console.log(`Carregando... Bateria em ${carga}%`)
    carga++
}
console.log(`Bateria carregada. ${carga}%`)


// Utilizando com 'for' (Estrutura de repetição com variável de controle)


for (var carga = 10 ; carga < 100; carga += 10) {
    console.log(`Carregando. Bateria em ${carga}%`)
}

var peso = quantidadePessoa