

function contar(){
    var valIni = Number(window.document.getElementById('valIni').value)
    var valFim = Number(window.document.getElementById('valFim').value)
    var valPasso = Number(window.document.getElementById('passo').value)
    var valRes = window.document.getElementById('resultado')
    var contador = valIni

    if (valIni == 0 || valFim == 0 ){
        window.alert('[ERRO] Faltam dados!')
    }
    else {
        valRes.innerHTML = 'Contando: <br>'

        if(valPasso <= 0){
            window.alert(`Passo inválido! Considerando PASSO = 1`)
            valPasso = 1
        }


        // COMO FAZER UMA CONTAGEM CRESCENTE:

        if (valIni < valFim){

            for (contador = valIni; contador <= valFim; contador += valPasso){ 
                res.innerHTML += `${contador} \u{1F449}`
            }
        }

        // COMO FAZER UMA CONTAGEM DECRESCENTE:
        else {
            for (contador = valIni; contador >= valFim; contador -= valPasso){
                res.innerHTML += `${contador} \u{1F449}`
            }
        }

        // COMO MOSTRAR UM EMOJI NO HTML
        res.innerHTML += `\u{1F3C1}`
        
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