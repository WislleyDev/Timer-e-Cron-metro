let btn_iniciar_cronometro = document.querySelector('#btn_iniciar2')
let btn_resetar_cronometro = document.querySelector('#btn_resetar2')
let btn_parar_cronometro = document.querySelector('#btn_parar2')
let segundos_cronometrados = document.querySelector('#segundos_cro')
let minutos_cronometrados = document.querySelector('#minutos_cro')
let horas_cronometrados = document.querySelector('#horas_cro')
let dias_cronometrados = document.querySelector('#dias_cro')
let parar_cronometro = false
let tempo = 0
let s = 0
let m = 0
let h = 0
let d = 0

cronometro.addEventListener('click', () => {
    clearInterval(intervalId)
    parar_cronometro = true
    btn_parar_cronometro.style.display = 'none'
    btn_iniciar_cronometro.style.display = 'block'
})

btn_iniciar_cronometro.addEventListener('click', () => {
    parar_cronometro = false
    btn_iniciar_cronometro.style.display = 'none'
    btn_parar_cronometro.style.display = 'block'
    if (!parar_cronometro) {
        intervalId = setInterval(() => {
            tempo++
            s++
            if (s == 60) {
                s = 0
                m++
            }

            if (m == 60) {
                m = 0
                h++
            }

            if (h == 24) {
                h = 0
                d++
            }

            if (s <= 9) {
                segundos_cronometrados.innerText = `0${s}s`
            } else if (s > 9) {
                segundos_cronometrados.innerText = `${s}s`
            }

            if (m <= 9) {
                minutos_cronometrados.innerText = `0${m}m`
            } else if (m > 9) {
                minutos_cronometrados.innerText = `${m}m`
            }

            if (h <= 9) {
                horas_cronometrados.innerText = `0${h}h`
            } else if (h > 9) {
                horas_cronometrados.innerText = `${h}h`
            }

            if (d <= 9) {
                dias_cronometrados.innerText = `0${d}d`
            } else if (d > 9) {
                dias_cronometrados.innerText = `${d}d`
            }

        }, 1000);
    } else {
        clearInterval(intervalId)
        parar_cronometro = true
    }
})

btn_parar_cronometro.addEventListener('click', () => {
    clearInterval(intervalId)
    btn_iniciar_cronometro.style.display = 'block'
    btn_parar_cronometro.style.display = 'none'
})

btn_resetar_cronometro.addEventListener('click', () => {
    clearInterval(intervalId)
    btn_iniciar_cronometro.style.display = 'block'
    btn_parar_cronometro.style.display = 'none'

    s = 0
    m = 0
    h = 0
    d = 0

    segundos_cronometrados.innerText = `00s`
    minutos_cronometrados.innerText = `00m`
    horas_cronometrados.innerText = `00h`
    dias_cronometrados.innerText = `00d`
})