function verificaParImpar() {
    let resultado = window.document.getElementById('resultado')
    var valdig = document.getElementById('inpnum')
    var numero = Number(valdig.value)
    
    //window.alert(numero)

    if (numero % 10 == 0 || numero % 10 == 2 || numero % 10 == 4 || numero % 10 == 6 || numero % 10 == 8){
        resultado.innerHTML = `O número ${numero} é par`
    } else {
        resultado.innerHTML = `O número ${numero} é ímpar`
    }
    
}
