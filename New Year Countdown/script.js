
const dayEl = document.getElementById("days")
const hourEl = document.getElementById("hours")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")

const newYearTime = new Date("jan 1, 2024 00:00:00").getTime()

updateCountdown()

function updateCountdown(){
    const now = new Date()
    const gap = newYearTime - now

    const sec = 1000
    const min = sec * 60
    const hr = min * 60
    const day = hr * 24

    
    const d = Math.floor(gap / day)
    const h = Math.floor((gap % day) / hr)
    const m = Math.floor((gap % hr) / min)
    const s = Math.floor((gap % min) / sec)
    

    dayEl.innerText = d  
    hourEl.innerText = h
    minuteEl.innerText = m
    secondEl.innerText = s

    setTimeout(updateCountdown, 1000)
     
    
}

