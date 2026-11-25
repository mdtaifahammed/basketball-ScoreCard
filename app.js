let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let hscore = 0
let gscore = 0
function addh1() {
    hscore +=1
    homeScore.textContent = hscore
}
function addh2() {
    hscore +=2
    homeScore.textContent = hscore
}
function addh3() {
    hscore +=3
    homeScore.textContent = hscore
}

function addg1() {
    gscore +=1
    guestScore.textContent = gscore
}
function addg2() {
    gscore +=2
    guestScore.textContent = gscore
}
function addg3() {
    gscore +=3
    guestScore.textContent = gscore
}