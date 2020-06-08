var tabela = document.querySelector('table')
var tr1 = document.createElement('tr')

tabela.appendChild(tr1)
var tr2 = document.createElement('tr')
tabela.appendChild(tr2)
var linhaDado = document.createElement('tr')
tabela.appendChild(linhaDado)
var linhaDado2 = document.createElement('tr')
tabela.appendChild(linhaDado2)
linhaDado2.classList.add('margensTabela')

var data = new Date();
var mes = new Date('', data.getMonth() + 1, 0);
var ultDia = mes.getDate()

for (let i = 1; i <= ultDia; i++) {
    var td = document.createElement('td')

    tr1.appendChild(td)
    td.innerHTML = i

    data.setDate(i);
    // linha de semana
    var tdDiasSemana = document.createElement('td')
    tdDiasSemana.classList.add('semana')
    tr2.appendChild(tdDiasSemana)

    var semana = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"]

    //var textoDS = document.createTextNode(semana[data.getUTCDay()])

    tdDiasSemana.innerHTML = semana[data.getUTCDay()]
    // linha de dado
    var tdDado = document.createElement('td')
    linhaDado.appendChild(tdDado)
    tdDado.innerHTML = semana[data.getUTCDay()]
    tdDado.classList.add('corLinha')

    //linha de dado 2 

    var tdDado2 = document.createElement('td')
    linhaDado2.appendChild(tdDado2)
    tdDado2.innerHTML = semana[data.getUTCDay()]
    tdDado2.classList.add('corLinha')

    if (tdDado2.innerHTML == "SAB") {

        if (i % 2 == 1 && tdDado2.innerHTML == "SAB") {
            tdDado2.classList.add('margensTabelaFinalSemana')
            tdDado2.classList.add('trabalhou') // adicionar classe trabalhou
        }
    }

    if (tdDado2.innerHTML == "DOM") {

        if (i % 2 == 1) {
            tdDado2.classList.add('margensTabelaFinalSemana')
        }


        document.write(tdDado2.innerHTML.length)
    }


}