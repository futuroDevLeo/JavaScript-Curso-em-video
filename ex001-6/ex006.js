var agora = new Date()
var hora = agora.getHours()
var diaSem = agora.getDay()
var dia = agora.getDate()
var min = agora.getMinutes()
var mes = agora.getMonth()
let mesEscrito = ''

if (min < 10) {
    console.log(`Agora são exatamente ${hora}:0${min} horas`)
} else {
    console.log(`Agora são exatamente ${hora}:${min} horas`)
}

if (hora < 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

switch(mes) {
    case 0:
        mesEscrito = 'Janeiro'
        break
    case 1:
        mesEscrito = 'Fevereiro'
        break
    case 2:
        mesEscrito = 'Março'
        break
    case 3:
        mesEscrito = 'Abril'
        break
    case 4:
        mesEscrito = 'Maio'
        break
    case 5:
        mesEscrito = 'Junho'
        break
    case 6:
        mesEscrito = 'Julho'
        break
    case 7:
        mesEscrito = 'Agosto'
        break
    case 8:
        mesEscrito = 'Setembro'
        break
    case 9:
        mesEscrito = 'Outubro'
        break
    case 10:
        mesEscrito = 'Novembro'
        break
    case 11:
        mesEscrito = 'Dezembro'
        break
}

switch(diaSem) {
    case 0:
        console.log(`Hoje é um Domingo dia ${dia} de ${mesEscrito}`)
        break
    case 1:
        console.log(`Hoje é uma Segunda-feira dia ${dia} de ${mesEscrito}`)
        break
    case 2:
        console.log(`Hoje é uma Terça-feira dia ${dia} de ${mesEscrito}`)
        break
    case 3:
        console.log(`Hoje é uma Quarta-feira dia ${dia} de ${mesEscrito}`)
        break
    case 4:
        console.log(`Hoje é uma Quinta-feira dia ${dia} de ${mesEscrito}`)
        break
    case 5:
        console.log(`Hoje é uma Sexta-feira dia ${dia} de ${mesEscrito}`)
        break
    case 6:
        console.log(`Hoje é um Sábado dia ${dia} de ${mesEscrito}`)
        break
}
