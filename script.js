function gerar () {
  var numero = document.getElementById('number');
  var tab = document.getElementById('slctab');

  if (numero.value.length == 0) {
    window.alert('Por favor, digite um número!')
  } else {
      var n = Number(numero.value)
      var c = 1
      tab.innerHTML = ''  // para limpar as respostas, a cada nova consulta de numero
      while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}` // para ter seleção ao clickar
        tab.appendChild(item) // para renderizar o elemento ITEM que criei acima
        c++ 
    }
  } 
}

