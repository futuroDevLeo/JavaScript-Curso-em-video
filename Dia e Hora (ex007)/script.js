function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msg2 = document.getElementById('msg2')
    var agora = new Date()
    var hora = agora.getHours()
    var diaSem = agora.getDay()
    var dia = agora.getDate()
    var min = agora.getMinutes()
    var mes = agora.getMonth()
    let mesEscrito = ''
    let msgdia = ''

    if (hora < 5) {
        msgdia = 'Boa madrugada!'
    } else if (hora < 12) {
        msgdia = 'Bom dia!'
    } else if (hora < 18) {
        msgdia = 'Boa tarde!'
    } else {
        msgdia = 'Boa noite!'
    }

    if (msgdia == 'Bom dia!') {
        img.src = 'fotomanha.png'
        document.body.style.background = '#ffca7c'
    } else if (msgdia == 'Boa tarde!') {
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else if (msgdia == 'Boa noite!') {
        img.src = 'fotonoite.png'
        document.body.style.background = '#222d5a'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#222d5a'
    }

    if (min < 10 && hora < 10) {
        msg.innerHTML = `${msgdia} Agora são exatamente 0${hora}:0${min} horas.`
    } else if (min < 10 && hora >= 10) {
        msg.innerHTML = `${msgdia} Agora são exatamente ${hora}:0${min} horas.`
    } else if (min >= 10 && hora < 10) {
        msg.innerHTML = `${msgdia} Agora são exatamente 0${hora}:${min} horas.`
    } else {
        msg.innerHTML = `${msgdia} Agora são exatamente ${hora}:${min} horas.`
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
            msg2.innerHTML = `Hoje é um Domingo dia ${dia} de ${mesEscrito}.`
        break
        case 1:
            msg2.innerHTML = `Hoje é uma Segunda-feira dia ${dia} de ${mesEscrito}.`
        break
        case 2:
            msg2.innerHTML = `Hoje é uma Terça-feira dia ${dia} de ${mesEscrito}.`
        break
        case 3:
            msg2.innerHTML = `Hoje é uma Quarta-feira dia ${dia} de ${mesEscrito}.`
        break
        case 4:
            msg2.innerHTML = `Hoje é uma Quinta-feira dia ${dia} de ${mesEscrito}.`
        break
        case 5:
            msg2.innerHTML = `Hoje é uma Sexta-feira dia ${dia} de ${mesEscrito}.`
        break
        case 6:
            msg2.innerHTML = `Hoje é um Sábado dia ${dia} de ${mesEscrito}.`
        break
    }
}