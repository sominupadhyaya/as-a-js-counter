const playerOneh2 = document.querySelector("[player-one]")
const btn1 = document.querySelector("[button-one]")


let count1 = 1
let count2 = 1

btn1.addEventListener("click" , () =>{
    playerOneh2.textContent = count1
    count1++
})

const playerTwoh2 = document.querySelector("[player-two]") 
const btn2 = document.querySelector("[button-two]")


btn2.addEventListener("click" , () =>{
    playerTwoh2.textContent = count2
    count2++
})
