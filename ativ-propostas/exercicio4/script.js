function gerarTabuada(){
    var numeroBase = Number(window.document.getElementById('inputNumber').value)
    var x1 = window.document.getElementById('xUm')
    var x2 = window.document.getElementById('xDois')
    var x3 = window.document.getElementById('xTres')
    var x4 = window.document.getElementById('xQuatro')
    var x5 = window.document.getElementById('xCinco')
    var x6 = window.document.getElementById('xSeis')
    var x7 = window.document.getElementById('xSete')
    var x8 = window.document.getElementById('xOito')
    var x9 = window.document.getElementById('xNove')
    var x10 = window.document.getElementById('xDez')



    if (numeroBase <= 0) {
        window.alert('Por favor, digite um número!')
    }
    else {
        for(let multiplicador = 1; multiplicador <= 10; multiplicador++){
            resultado = numeroBase * multiplicador
            //window.alert(`À multiplicação de ${numeroBase} X ${multiplicador} é = a ${resultado}`)
        
    
    switch (multiplicador) {
    case 1:
        x1.innerHTML = `${numeroBase} X ${multiplicador} = ${resultado}`
        break                        
    case 2:
        x2.innerHTML = `${numeroBase} X ${multiplicador} = ${resultado}`
        break
    case 3: 
        x3.innerHTML = `${numeroBase} X ${multiplicador} = ${resultado}`
        break
    case 4:
        x4.innerHTML = `${numeroBase} X ${multiplicador} = ${resultado}`
        break
    case 5:
        x5.innerHTML = `${numeroBase} X ${multiplicador} = ${resultado}`
        break
    case 6:
        x6.innerHTML = `${numeroBase} X ${multiplicador} = ${resultado}`
        break
    case 7:
        x7.innerHTML = `${numeroBase} X ${multiplicador} = ${resultado}`
        break
    case 8:
        x8.innerHTML = `${numeroBase} X ${multiplicador} = ${resultado}`
        break
    case 9:
        x9.innerHTML = `${numeroBase} X ${multiplicador} = ${resultado}`
        break
    case 10:
        x10.innerHTML = `${numeroBase} X ${multiplicador} = ${resultado}`
        break
    default:
        console.log('[ERRO] VALOR INVÁLIDO')
        }
}
    
}

}