const choice = ["Rock", "Paper", "Scissors"];

for (var i = 0; i < 3; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        var htmlButton = this.innerHTML;
        game(htmlButton);
        activeButton(htmlButton);
    })
}

document.addEventListener("keydown", function(event) {
    var keyp = event.key;
    keyp = keyp.toUpperCase();
    game(keyp);
    activeButton(keyp);
})

function game(key) {
    var randomNumber = Math.random() * 3;
    randomNumber = Math.floor(randomNumber);
    var compChoice = choice[randomNumber];
    var compChoiceSource = "images/" + compChoice + ".png";
    var imgLocation = document.querySelector(".computer");
    var pLocation = document.querySelector("#comp");
    var rLocation = document.querySelector("#result");
    if (key === "R" && randomNumber === 2) {
        pLocation.innerHTML = "You selected Rock and computer selected Scissors";
        imgLocation.setAttribute("src",compChoiceSource);
        rLocation.innerHTML = "You Won!!!";
    } else if (key === "S" && randomNumber === 1) {
        pLocation.innerHTML = "You selected Scissors and computer selected Paper";
        imgLocation.setAttribute("src",compChoiceSource);
        rLocation.innerHTML = "You Won!!!";
    } else if (key === "P" && randomNumber === 0) {
        pLocation.innerHTML = "You selected Paper and computer selected Rock";
        imgLocation.setAttribute("src",compChoiceSource);
        rLocation.innerHTML = "You Won!!!";
    } else if (key === compChoice[0]) {
        pLocation.innerHTML = "Both selected " + compChoice;
        imgLocation.setAttribute("src",compChoiceSource);
        rLocation.innerHTML = "Draw!!!";
    } else if (key === 'R') {
        pLocation.innerHTML = "You selected Rock and computer selected " + compChoice;
        imgLocation.setAttribute("src",compChoiceSource);
        rLocation.innerHTML = "You Lost!!!";
    } else if (key === 'P') {
        pLocation.innerHTML = "You selected Paper and computer selected " + compChoice;
        imgLocation.setAttribute("src",compChoiceSource);
        rLocation.innerHTML = "You Lost!!!";
    } else if (key === 'S') {
        pLocation.innerHTML = "You selected Scissors and computer selected " + compChoice;
        imgLocation.setAttribute("src",compChoiceSource);
        rLocation.innerHTML = "You Lost!!!";
    }
}

function activeButton(keyb) {
    var active = document.querySelector("#" + keyb);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
}