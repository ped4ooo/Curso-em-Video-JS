function verificar() {

    var resultado = window.document.getElementById('resultado')
    var valorPeso = Number(document.getElementById('peso').value)
    var valorAltura = Number(document.getElementById('altura').value)
    var valorCalculo = (valorPeso / valorAltura ** 2)
    var valorImc = Number(valorCalculo.toFixed(2))

    if(valorImc < 18.5){
        resultado.innerHTML = `O seu IMC é ${valorImc} - IMC menor que 18,5 = <strong>"Baixo peso"</strong>`
    } 
    else if (valorImc >= 18.5 && valorImc < 25){
        resultado.innerHTML = `O seu IMC é ${valorImc} - IMC entre 18,5 e 24,9 = <strong>"Normal"</strong>`
    }
    else if (valorImc >= 25 && valorImc < 30){
        resultado.innerHTML = `O seu IMC é ${valorImc} - IMC entre 25 e 29,9 = <strong>"Sobrepeso"</strong>`
    }
    else if (valorImc >= 30 && valorImc < 35){
        resultado.innerHTML = `O seu IMC é ${valorImc} - IMC entre 30 e 34,9 = <strong>"Obesidade"</strong>`
    }
    else if(valorImc >= 35 && valorImc < 40){
        resultado.innerHTML = `O seu IMC é ${valorImc} - IMC entre 35 e 39,9 = <strong>"Obesidade Mórbida"</strong>`
    }
    else if(valorImc >= 40){
        resultado.innerHTML = `O seu IMC é ${valorImc} - IMC superior a 40 = <strong>"Obesidade Mórbida"</strong>`
    }
}