const playerOneh2 = document.querySelector("[player-one]")

const btn1 = document.querySelector("[button-one]")
const btn2 = document.querySelector("[button-two]")

const playerTwoh2 = document.querySelector("[player-two]") 
const btn3 = document.querySelector("[button-three]")
const btn4 = document.querySelector("[button-four]")



let count1 = 1
let count2 = 1

btn1.addEventListener("click" , () =>{
    playerOneh2.textContent = count1
    count1++
})



btn3.addEventListener("click" , () =>{
    playerTwoh2.textContent = count2
    count2++
})
