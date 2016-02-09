
var RockPaperScissors = (function() {
    var btn = document.getElementById("btn");
    var computerChoice = Math.random();
    var choose = document.getElementById("choose").value;
    var message = document.getElementById("message");
    var message2 = document.getElementById("message2");
    message.innerHTML = "";
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    var compare = function (choice1, choice2) {
        var result;
        message2.innerHTML = "";
        message.innerHTML = "Computer: " + computerChoice;

        if (choice1 === choice2) {
            result = "The result is a tie!";
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                result = "Rock wins";
            } else {
                result = "Paper wins";
            }
        }
        else if (choice1 === "paper") {
            if (choice2 === "rock") {
                result = "Paper wins";
            } else result = "Scissors wins";
        }
        //message2.innerHTML = result;
    }

    btn.addEventListener("click", winner = function () {
        compare(choose, computerChoice);
    });
})();



