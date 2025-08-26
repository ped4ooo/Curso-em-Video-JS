function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var anoDig = document.getElementById('txtano')    
    var res = document.querySelector('div#res')
    

    if (anoDig.value == 0 || anoDig.value > ano  ) {
        window.alert('Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anoDig.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
                gen = 'Homem'

                if (idade >= 0 && idade <= 10 ) {
                    img.setAttribute('src' , 'menino.png')
                }
                else if (idade <= 20) {
                    img.setAttribute('src' , 'moço.png')

                }
                else if (idade <= 59) {
                    img.setAttribute('src' , 'homem.png')
                }
                else if (idade >= 60) {
                    img.setAttribute('src' , 'senhor.png')
                }
            
            } 
    
        else if (fsex[1].checked) {
                gen = 'Mulher'

                if (idade >= 0 && idade <= 10 ) {
                    img.setAttribute('src' , 'menina.png')
                }
                else if (idade <= 20) {
                    img.setAttribute('src' , 'moça.png')

                }
                else if (idade <= 59) {
                    img.setAttribute('src' , 'mulher.png')
                }
                else if (idade >= 60) {
                    img.setAttribute('src' , 'senhora.png')
                }
            }

        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Foi identificado ${gen} com ${idade}`
        res.appendChild(img)

        
    }
} 