const yearEl = document.getElementById("year")
const monthsEl = document.getElementById("months")
const dayEl = document.getElementById("days")
const hourEl = document.getElementById("hours")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")


updateCountdown()

function updateCountdown(){
    const now = new Date()    

    const y = now.getFullYear()
    const month = now.getMonth()
    const d = now.getDate()
    const h = now.getHours()
    const m = now.getMinutes()
    const s = now.getSeconds()
    
    yearEl.innerText = y
    monthsEl.innerText = month + 1
    dayEl.innerText = d  
    hourEl.innerText = h
    minuteEl.innerText = m
    secondEl.innerText = s

    setTimeout(updateCountdown, 1000)
     
    
}

