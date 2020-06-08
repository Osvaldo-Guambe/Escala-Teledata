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

var contador = 0

var mesExtenso = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Octubro', 'Novembro', 'Dezembro']

for (let i = 1; i <= ultDia; i++) {
    var td = document.createElement('td')

    tr1.appendChild(td)
    td.innerHTML = i

    data.setDate(i);
    // linha de semana
    var tdDiasSemana = document.createElement('td')
    tdDiasSemana.classList.add('semana')
    tr2.appendChild(tdDiasSemana)

    var semana = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]

    var textoDS = document.createTextNode(semana[data.getUTCDay()])

    //tdDiasSemana.innerHTML = semana[data.getUTCDay()]
    tdDiasSemana.appendChild(textoDS)
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
        contador += 1
        if (contador == 1 || contador == 4) {
            tdDado2.classList.add('margensTabelaFinalSemana')
            tdDado2.classList.add('trabalhou') // adicionar classe trabalhou            
        } else if (contador == 3) {
            tdDado2.classList.add('corFolga')
        }
        if (contador == 4 && tdDado2.innerHTML == "SAB") {
            localStorage.setItem(mesExtenso[data.getMonth()], contador)
            var salvarUmDiaParaProxMes = 1
        }

    }

    if (tdDado2.innerHTML == "DOM") {

        if (contador == 2) {
            tdDado2.classList.add('margensTabelaFinalSemana')
        } else if (contador == 3) {
            tdDado2.classList.add('corFolga')
        }
    }

    /*if (localStorage.getItem(mesExtenso[data.getMonth()]) == 4) {
        if (tdDado2.innerHTML == "DOM") {

            if (contador == 1 || contador == 4) {
                tdDado2.classList.add('margensTabelaFinalSemanas')
                tdDado2.classList.add('trabalhou') // adicionar classe trabalhou            
            }
        }
    }*/

    //fim do ciclo for
}



document.write(contador)
document.write("<br>Mes Passado: " + data.getMonth())
document.write(`<br>LocalStorage: ${mesExtenso[data.getMonth()]} tem  ${localStorage.getItem(mesExtenso[data.getMonth()])} Semanas.`)