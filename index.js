let card1 = null
let card2 = null
let cardNew = null
let total = null
let cardsPts = document.getElementById("cards-pts")
let totalPts = document.getElementById("total-pts")
let dealerMessage = document.getElementById("dealer-msg")
let startBtn = document.getElementById("start-btn")
let newBtn = document.getElementById("new-btn")
function randomCard(){
    return Math.floor(Math.random()*11)+1
}

function renderGame(){
    if(total === 21){
        dealerMessage.textContent = "You've got BlackJack!"
    } else if(total > 21){
        dealerMessage.textContent = "You're out of the game."
    } else {
        dealerMessage.textContent = "New Card?"
    }
    totalPts.textContent = "Total: " + total
}

function newCard(){
    cardNew = randomCard()
    total += cardNew
    cardsPts.textContent += cardNew + " "
    renderGame()
}

function startGame(){
    cardsPts.textContent = "Cards: "
    card1 = randomCard()
    card2 = randomCard()
    total = card1 + card2
    cardsPts.textContent += card1 + " " + card2 + " "
    renderGame()
}