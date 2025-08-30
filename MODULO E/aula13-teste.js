var pizza = 'Peperoni'
var fatias = 8
var comi = 0

if (pizza == 'Calabresa'){
    while(comi < 8 ){
        console.log('Comendo pizza')
        fatias--
        comi++
    }
}
else {
    console.log('Não vou comer, obrigado.')
}

console.log(`Sobrou ${fatias} fatias de pizza`)
console.log(`Eu comi ${comi} fatias`)

//console.log(`Eu comi ${comi} pedaços`)