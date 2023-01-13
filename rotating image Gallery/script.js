const imageContainerEl = document.querySelector(".image-container")
const prevEl =  document.querySelector("#prev")
const nextEl =  document.querySelector("#next")

let x = 0
prevEl.addEventListener("click", ()=>{
    x = x + 45
    updateGallery()
})

function updateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)` 
}

nextEl.addEventListener("click", ()=>{
    x = x - 45 
    updateGallery()
    
})

updateGallery()

