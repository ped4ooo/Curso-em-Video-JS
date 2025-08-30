

function contar(){
    var valIni = Number(window.document.getElementById('valIni').value)
    var valFim = Number(window.document.getElementById('valFim').value)
    var valPasso = Number(window.document.getElementById('passo').value)
    var valRes = window.document.getElementById('resultado')
     
    while(valIni < valFim){
        valIni = valIni + valPasso
        valRes.innerHTML = `${valIni}`
    }
}



// Precisei ir testando manualmente antes.

/*
    var valIni = 1
    var valFim = 10
    var valPasso = 2
     
    while(valIni < valFim){
        console.log(valIni)
        valIni = valIni + valPasso
    }

    console.log('Fim da execução...............')
*/