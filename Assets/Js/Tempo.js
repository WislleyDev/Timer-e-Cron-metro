let div_selecao_de_tempo = document.querySelector('#selecao_de_tempo')
let btn_confirmar = document.querySelector('#confirmar')
let btn_cancelar = document.querySelector('#cancelar')
let Tempo = document.querySelector('#tempo')
let num_h = document.querySelector('#num_h')
let num_m = document.querySelector('#num_m')
let num_s = document.querySelector('#num_s')
let Horas_com_h, Minutos_com_m, Segundos_com_s
let Horas, Minutos, Segundos
let editado = false
let txt = ''

Tempo.addEventListener('click', () => {
    num_h.value = ''
    num_m.value = ''
    num_s.value = ''
    div_selecao_de_tempo.style.display = 'flex'
})

btn_confirmar.addEventListener('click', () => {
    editado = true
    Horas = parseInt(num_h.value)
    Minutos = parseInt(num_m.value)
    Segundos = parseInt(num_s.value)
    Horas_com_h = `${num_h.value}h`
    Minutos_com_m = `${num_m.value}m`
    Segundos_com_s = `${num_s.value}s`
    txt = `${Horas_com_h} ${Minutos_com_m} ${Segundos_com_s}` 
    
    
    
    if (Horas_com_h == 'h' || Minutos_com_m == 'm' || Segundos_com_s == 's') {
        alert('Você Só Pode Ta de Zueira!')
    } else if (Horas_com_h == '0h' && Minutos_com_m == '0m' && Segundos_com_s == '0s') {
        alert('Você Só Pode Ta de Zueira!')
    } else if (num_h.value > 24 || num_m.value > 59 || num_s.value > 59) {
        alert('Você Só Pode Ta de Zueira!')
    } else {
        num_h.value = ''
        num_m.value = ''
        num_s.value = ''
        converterParaSegundos_com_s(txt)
        div_selecao_de_tempo.style.display = 'none'
    }
})

btn_cancelar.addEventListener('click', () => {
    num_h.value = ''
    num_m.value = ''
    num_s.value = ''
    div_selecao_de_tempo.style.display = 'none'
})

let totalsegundos = 0
function converterParaSegundos_com_s(tempo) {
    // Inicializa a variável total de Segundos_com_s como 0 ⏳

    // Usa expressões regulares para encontrar todas as partes da string que representam tempo ⌛️
    const Horas_com_h = tempo.match(/(\d+)h/)
    const Minutos_com_m = tempo.match(/(\d+)m/)
    const Segundos_com_s = tempo.match(/(\d+)s/)

    // Se encontrar Horas_com_h na string, converte para Segundos_com_s e adiciona ao total ⏱️
    if (Horas_com_h) {
        totalsegundos += parseInt(Horas_com_h[1]) * 3600
    }

    // Se encontrar Minutos_com_m na string, converte para Segundos_com_s e adiciona ao total 🕰️
    if (Minutos_com_m) {
        totalsegundos += parseInt(Minutos_com_m[1]) * 60
    }

    // Se encontrar Segundos_com_s na string, adiciona ao total diretamente ⌚️
    if (Segundos_com_s) {
        totalsegundos += parseInt(Segundos_com_s[1])
    }

    // Retorna o total de Segundos_com_s acumulados 🎯

    return totalsegundos
}

