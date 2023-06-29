let num = document.getElementById('fnum')
let caixa = document.getElementById('mySelect')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value)) {
      let valor = Number(num.value);
      if (!inLista(valor, valores)) {
        valores.push(valor);
        let item = document.createElement('option');
        item.text = `O número ${valor} foi guardado`;
        caixa.add(item);
        num.value = '';
        num.focus();
        res.innerHTML = '';
      } else {
        alert('Valor já encontrado na lista.');
        num.value = '';
        num.focus();
      }
    } else {
      alert('Valor inválido.');
      num.value = '';
      num.focus();
    }
  }

function finalizar() {
    if (valores.length >= 2) {
        let maximo = Math.max(...valores)
        let minimo = Math.min(...valores)
        let soma = valores.reduce((a, b) => Number(a) + Number(b), 0)
        let media = soma / valores.length
        let total = valores.length

        res.innerHTML = `Ao todo temos ${total} valores cadastrados.<br>
                        O maior valor cadastrado é ${maximo}.<br>
                        O menos valor cadastrado é ${minimo}.<br>
                        A soma dos valores é ${soma}.<br>
                        A média dos valores é ${media.toFixed(2)}.`
    } else {
        alert('Por favor, adicione números à lista!')
        num.focus()
        num.value = ''
    }
}