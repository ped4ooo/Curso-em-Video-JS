
var horaLocal = new Date()
var hora = horaLocal.getHours() 

console.log(`Agora são exatamente ${hora}h`)

if (hora >= 0 && hora < 5){
    console.log('Boa madrugada')
} 
else if (hora < 12) {
    console.log('Bom dia')
}
else if (hora >= 12 || hora < 18){
    console.log('Boa tarde')
}
else if (hora >= 18){
    console.log('Boa noite')
}
