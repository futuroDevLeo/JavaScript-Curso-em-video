function contar() {
    var inicio = parseInt(document.getElementById('txtinicio').value)
    var fim = parseInt(document.getElementById('txtfim').value)
    var passos = parseInt(document.getElementById('txtpassos').value)
    var res = document.querySelector('div#res')
    var c = inicio

    res.innerHTML = ''

    if (isNaN(inicio) || isNaN(fim) || isNaN(passos)) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        if (passos <= 0) {
            alert('Passo inválido! Considerando passo 1')
            passos = 1;
        }
        res.innerHTML = 'Contando: <br>'
        if (inicio < fim && passos > 0) {
            while (c <= fim) {
                res.innerHTML += `${c} `
                c += passos
            }
        } else {
            while (c >= fim && passos > 0) {
                res.innerHTML += `${c} `
                c -= passos
            }
        }
    }
}