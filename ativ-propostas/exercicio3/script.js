

function contar(){
    var valIni = Number(window.document.getElementById('valIni').value)
    var valFim = Number(window.document.getElementById('valFim').value)
    var valPasso = Number(window.document.getElementById('passo').value)
    var valRes = window.document.getElementById('resultado')
    var contador = valIni

    if (valIni == 0 || valFim == 0 || valPasso== 0){
        window.alert('[ERRO] Faltam dados!')
    }
    else {
        valRes.innerHTML = 'Contando:'

        while(contador <= valFim){
            valRes.innerHTML += `${contador} `
            contador += valPasso
        }

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
    console.log(val)
*/