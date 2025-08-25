 function carregar(){
    var saudacao = window.document.getElementById('saudacao')
    var mensagem = window.document.getElementById('mensagem')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    //var hora = 12// testando diferentes horários

    mensagem.innerHTML = `Agora são ${hora}h`

    if (hora >= 0 && hora < 12){
        foto.src = 'manha.png'
        document.body.style.background = '#92885a'
        saudacao.innerHTML = `Bom dia!`
        //console.log('VAXCO') Quando o código não estava alterando as imagens (estava faltando o ID da imagem no HTML) eu coloquei esse console.log para descobrir onde meu programa estava chegando e se o erro estava aqui.
    }
    else if (hora < 18 ) {
        foto.src = 'tarde.png'
        document.body.style.background = '#834204ff'
        saudacao.innerHTML = `Boa tarde!`
        //console.log('FLORIPA')
    }
    else { 
        foto.src = 'noite.png'
        document.body.style.background = '#0a2320'
        saudacao.innerHTML = `Boa noite!`
        //console.log('ERREJOTA')
    }
 }