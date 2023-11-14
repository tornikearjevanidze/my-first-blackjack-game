let player= {
    name: "user",
    chips: 1000
}

let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") 
// let sumEl = document.querySelector("#sum-el") igive rac getElementById
let cardsEl = document.getElementById("cardsel")



let playerEl= document.getElementById("player-el")
playerEl.textContent = player.name + ": $" +player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    if(randomNumber > 10){
        return 10 
    } else if(randomNumber === 1){
        return 11

    } else {
        return randomNumber
    }
    
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard ()
    cards =[firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
// gamoaqvs kartebis jami
sumEl.textContent = "Sum: " + sum

cardsEl.textContent = "Cards: " 

for (let i = 0; i < cards.length; i++)

cardsEl.textContent += cards[i] +" "

if(sum <= 20){
    message = ("Do you want to draw a new card")
}else if(sum===21){
    message = ("Wow! you have blackjack")
    hasBlackJack = true
}else{
    message = ("you are out")
    isAlive = false
}

 messageEl.textContent =message
}

function newCard(){

    if(isAlive === true && hasBlackJack === false){
    console.log("draw a new card")
    let Card = getRandomCard()
    sum += Card
    cards.push(Card)
    renderGame()

    
    }
}
