let card1 = null
let card1Index = null
let card1Value = null
let card2 = null
let card2Index = null
let card2Value = null
let cardNew = null
let cardNewValue = null
let cardNewIndex = null
let total = null
let cardsPts = document.getElementById("cards-pts")
let totalPts = document.getElementById("total-pts")
let dealerMessage = document.getElementById("dealer-msg")
let startBtn = document.getElementById("start-btn")
let newBtn = document.getElementById("new-btn")
let out = null
let hasBlackjack = null
let cardsContainer = document.getElementById("cards-container")
let cards = []
let cardsInDeck = 52

function restartCards(){
    cardsInDeck = 52
    cards = []
    cards.push("images/ace_of_clubs.svg", "images/ace_of_diamonds.svg", "images/ace_of_hearts.svg", "images/ace_of_spades.svg")
    for(let i = 2; i<=10; i++){
        cards.push("images/"+i+"_of_clubs.svg", "images/"+i+"_of_diamonds.svg", "images/"+i+"_of_hearts.svg", "images/"+i+"_of_spades.svg")
    }
    cards.push("images/jack_of_clubs.svg", "images/jack_of_diamonds.svg", "images/jack_of_hearts.svg", "images/jack_of_spades.svg", 
            "images/queen_of_clubs.svg", "images/queen_of_diamonds.svg", "images/queen_of_hearts.svg", "images/queen_of_spades.svg", 
            "images/king_of_clubs.svg", "images/king_of_diamonds.svg", "images/king_of_hearts.svg", "images/king_of_spades.svg")
    console.log(cards);
}

function randomCard(){
    console.log(cardsInDeck)
    return 1 + Math.floor(Math.random()*cardsInDeck--)
}

function showCards(cardIndex){
    let card = document.createElement("img")
    card.src = cards[cardIndex]
    cardsContainer.appendChild(card)
}

function renderGame(){
    if(total === 21){
        dealerMessage.textContent = "You've got BlackJack!"
        hasBlackjack = true
    } else if(total > 21){
        dealerMessage.textContent = "You're out of the game."
        out = true
    } else {
        dealerMessage.textContent = "New Card?"
    }
    totalPts.textContent = "Total: " + total
}

function cardValue(card){
    if(card.startsWith("images/ace")){
        return parseInt(prompt("You got Ace. Choose a value: 1 or 11"))
    } else if(card.startsWith("images/jack") || 
            card.startsWith("images/queen") || 
            card.startsWith("images/king")){
        return 11
    } else if(card.startsWith("images/10")){
        return 10
    } else {
        return parseInt(card.charAt(7))
    }
}

function newCard(){
    if(out == false && hasBlackjack == false){
        cardNewIndex = randomCard()
        cardNew = cards[cardNewIndex]
        cardNewValue = cardValue(cardNew)
        showCards(cardNewIndex)
        total += cardNewValue
        cardsPts.textContent += cardNewValue + " "
        cards.splice(cardNewIndex, 1)
        renderGame()
    }
}

function startGame(){
    restartCards()
    out = false
    hasBlackjack = false
    cardsPts.textContent = "Cards: "
    cardsContainer.innerHTML = ""
    card1Index = randomCard()
    card1 = cards[card1Index]
    card1Value = cardValue(card1)
    showCards(card1Index)
    cards.splice(card1Index, 1)
    card2Index = randomCard()
    card2 = cards[card2Index]
    card2Value = cardValue(card2)
    showCards(card2Index)
    cards.splice(card2Index, 1)
    total = card1Value + card2Value
    cardsPts.textContent += card1Value + " " + card2Value + " "
    console.log(cards);
    renderGame()
}