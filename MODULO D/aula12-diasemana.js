var dia = new Date()         
var diaSeman = dia.getDay()  //dessa forma eu pego o número do dia atual da semana

//var diaSeman = 3 //testando caso fosse outro dia

/*  Em JS os dias da semana são representados da seguinte forma:

    Domingo = 0
    Segunda = 1
    Terça = 2
    Quarta = 3
    Quinta = 4
    Sexta = 5
    Sábado = 6
*/ 

switch (diaSeman) {
    case 0:
        console.log('Hoje é domingo')
        break                        // SEMPRE COLOCAR O BREAK - O PROGRAMA VAI CONTINUAR RODANDO ATÉ ENCONTRAR O MESMO
    case 1:
        console.log('Hoje é segunda')
        break
    case 2: 
        console.log('Hoje é terça')
        break
    case 3:
        console.log('Hoje é quarta')
        break
    case 4:
        console.log('Hoje é quinta')
        break
    case 5:
        console.log('Hoje é sexta')
        break
    case 6:
        console.log('Hoje é sábado') 
        break
    default:
        console.log('[ERRO] DIA INVÁLIDO')
}