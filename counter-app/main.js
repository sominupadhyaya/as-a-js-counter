const playerOneh2 = document.querySelector("[player-one]")

const btn1 = document.querySelector("[button-one]")
const btn2 = document.querySelector("[button-two]")

const playerTwoh2 = document.querySelector("[player-two]") 
const btn3 = document.querySelector("[button-three]")
const btn4 = document.querySelector("[button-four]")



let count1 = 0
let count2 = 0

btn1.addEventListener("click" , () =>{
    count1++
    playerOneh2.textContent = count1
    count1 >= 0? playerOneh2.classList.remove("negative") : null
})

btn2.addEventListener("click" , () =>{
    count1--
    playerOneh2.textContent = count1
    count1 < 0 ? playerOneh2.classList.add("negative") : null
})


console.log(playerOneh2.classList)

btn3.addEventListener("click" , () =>{
    count2++
    playerTwoh2.textContent = count2
    count2 >= 0 ? playerTwoh2.classList.remove("negative") : null 
})
btn4.addEventListener("click" , () =>{
    count2--
    playerTwoh2.textContent = count2
    count2 < 0 ? playerTwoh2.classList.add("negative") : null
})


/*
const eventFunction = (count, player) => () => {
    count--
    player.textContent = count
    count >= 0? player.classList.remove("negative")
}
*/