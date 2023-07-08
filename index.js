let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

// guest score one ande home score one

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreEl = document.getElementById ("guest-score")
let guestScore = 0
function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
    
}

//guest score two and gome score two

let homeScoreBtnTwo = document.getElementById("home-score-btn-2")


function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent=homeScore
}

let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")

function increaseGuestScoreTwo(){
    guestScore+=2
    guestScoreEl.textContent=guestScore
    
}

//guest score three and gome score three

let homeScoreBtnThree = document.getElementById("home-score-btn-3")


function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent=homeScore

}

let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

function increaseGuestScoreThree(){
    guestScore+=3
    guestScoreEl.textContent=guestScore
    
}
