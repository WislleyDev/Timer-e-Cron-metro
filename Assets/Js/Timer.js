let btn_iniciar = document.querySelector('#btn_iniciar')
let btn_resetar = document.querySelector('#btn_resetar')
let btn_parar = document.querySelector('#btn_parar')
let span_minutos = document.querySelector('#minutos')
let span_segundos = document.querySelector('#segundos')
let timer = document.querySelector('#selected_timer')
let cronometro = document.querySelector('#selected_cronometro')
let section_timer = document.querySelector('#timer')
let section_cronometro = document.querySelector('#cronometro')
let alarme = new Audio('Assets/Audios/cano-de-metal-caindo.mp3')
let parar_audio = false
let parar = false
let segundos = 300
let intervalId // Variável para armazenar o identificador do intervalo

timer.addEventListener('click', () => {
    alarme.pause()
    parar = true
    section_timer.style.display = 'none'
    section_cronometro.style.display = 'flex'
    btn_parar.style.display = 'none'
    btn_iniciar.style.display = 'block'
})

cronometro.addEventListener('click', () => {
    section_timer.style.display = 'flex'
    section_cronometro.style.display = 'none'
})

btn_iniciar.addEventListener('click', () => {
    parar_audio = false
    parar = false
    btn_iniciar.style.display = 'none'
    btn_parar.style.display = 'block'

    if (!parar) {
        intervalId = setInterval(() => {
            if (parar) {
                clearInterval(intervalId) // Para o intervalo se 'parar' for true
                return
            }

            segundos--
            let minutos = parseInt(segundos / 60)
            let seconds = segundos % 60

            span_minutos.innerText = `${minutos}m`
            span_segundos.innerText = seconds <= 9 ? `0${seconds}s` : `${seconds}s`

            if (segundos <= 0) {
                clearInterval(intervalId) // Para o intervalo quando o tempo acabar
                parar = true
                btn_iniciar.style.display = 'none'
                btn_parar.style.display = 'none'
                segundos = 300
                    alarme.play()
                    alarme.addEventListener('ended', () => {
                    alarme.play()
                    })
            }
        }, 1000);

        setTimeout(() => {
            parar = true
            clearInterval(intervalId) // Garante que o intervalo pare após 300000 milissegundos (5 minutos)
        }, 300000);
    }
})

btn_resetar.addEventListener('click', () => {
    alarme.pause()
    segundos = 300
    parar = true
    clearInterval(intervalId) // Para o intervalo ao resetar
    span_minutos.innerText = `5m`
    span_segundos.innerText = `00s`
    btn_iniciar.style.display = 'block'
    btn_parar.style.display = 'none'
})

btn_parar.addEventListener('click', () => {
    alarme.pause()
    btn_iniciar.style.display = 'block'
    btn_parar.style.display = 'none'
    parar = true
    clearInterval(intervalId) // Para o intervalo ao parar
})
