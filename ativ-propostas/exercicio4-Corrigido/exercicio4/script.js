function gerarTabuada(){
    var numeroBase = Number(window.document.getElementById('inputNumber').value)
    var select = window.document.getElementById('select')
    
    if (numeroBase == 0) {
        window.alert('Por favor, digite um número!')
    }
    else {
       select.innerHTML = ''
        for(let multiplicador = 1; multiplicador <= 10; multiplicador++){
            let item = document.createElement('option')
            item.text = `${numeroBase} X ${multiplicador} = ${numeroBase*multiplicador}`
            select.appendChild(item)
        }
    }
}