let btn_iniciar = document.querySelector('#btn_iniciar')
let btn_resetar = document.querySelector('#btn_resetar')
let btn_parar = document.querySelector('#btn_parar')
let span_horas = document.querySelector('#horas')
let span_minutos = document.querySelector('#minutos')
let span_segundos = document.querySelector('#segundos')
let timer = document.querySelector('#selected_timer')
let cronometro = document.querySelector('#selected_cronometro')
let section_timer = document.querySelector('#timer')
let section_cronometro = document.querySelector('#cronometro')
let alarme = new Audio('Assets/Audios/cano-de-metal-caindo.mp3')
let parar_audio = false
let segundos = 300
let parar = false
let intervalId // Variável para armazenar o identificador do intervalo

btn_confirmar.addEventListener('click', () => {
    segundos = totalsegundos
    span_horas.style.display = 'block'
    span_horas.innerText = Horas <= 9 ? `0${Horas}h` : `${Horas}h`
    span_minutos.innerText = Minutos <= 9 ? `0${Minutos}m` : `${Minutos}m`
    span_segundos.innerText = Segundos <= 9 ? `0${Segundos}s` : `${Segundos}s`
})

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
            if (!editado) {
                let minutos = parseInt(segundos / 60)
                let seconds = segundos % 60
    
                span_minutos.innerText = `${minutos}m`
                span_segundos.innerText = seconds <= 9 ? `0${seconds}s` : `${seconds}s`
            } else {
                if (Segundos != -1) {
                    Segundos--
                }
                
                if (Segundos == 0 && Minutos != 0) {
                    Segundos = 59
                    Minutos--
                }
                
                if (Minutos == 0 && Horas != 0) {
                    Minutos = 59
                    Horas--
                }
                span_horas.innerText = Horas <= 9 ? `0${Horas}h` : `${Horas}h`
                span_minutos.innerText = Minutos <= 9 ? `0${Minutos}m` : `${Minutos}m`
                span_segundos.innerText = Segundos <= 9 ? `0${Segundos}s` : `${Segundos}s`
            }

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
    span_horas.style.display = 'none'
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
