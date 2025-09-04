
// Mostrando todos os valores de um array no console

let infosPessoa = ["Pedro", 21, "Jundiaí-SP", "VASCAÍNO", 1.85 , 71]

for (let posicao = 0; posicao < infosPessoa.length; posicao++){
    console.log(infosPessoa[posicao])
}


// Uma forma ainda mais simplificada de realizar esse processo é assim:

let infoPessoa = ["Pedro", 21, "Jundiaí-SP", "VASCAÍNO", 1.85 , 71]

for (let posicao in infoPessoa) {
    console.log(infoPessoa[posicao])
}


// Fazendo testes

let testeEu = ["Pedro", 21, "Jundiaí-SP", "VASCAÍNO", 1.85 , 71]

testeEu.push("Maringá-PR")
testeEu.sort()
console.log(testeEu)
console.log(`O array possui ${testeEu.length} posições`)
console.log(`O primeiro valor do array é = ${testeEu[0]}`)

let posicao = testeEu.indexOf(21)
if (posicao == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${posicao}`)
}