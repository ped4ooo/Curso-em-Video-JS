function verificar(){
    
    var resultado = document.getElementById('resultado')
    var numero1 = Number(document.getElementById('display1').value)
    var numero2 = Number(document.getElementById('display2').value)

    if(numero1 == numero2){
        resultado.innerHTML = `Os números são iguais`
    } else if (numero1 > numero2 ){
        resultado.innerHTML = `O número maior é o ${numero1}`
    } else {
        resultado.innerHTML = `O número maior é o ${numero2}`
    }

}