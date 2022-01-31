// On document load the function that draws the winner is selected. 
let winner = -1;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("YES").style.visibility = "hidden";
    document.getElementById("NO").style.visibility = "hidden";
    drawWinner();
});

// function to randomly choose the winner
function drawWinner() {
    winner = Math.random(0, 2).toFixed();
    hasWon = false;
    console.log("The winner is " + winner); // left here on purpose for debugging reasons
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("YES").style.visibility = "hidden";
    document.getElementById("NO").style.visibility = "hidden";
}

var hasWon = false;
// function to play again
function playAgain(parameter) {
    if (parameter == 3) {
        document.getElementById("buttonOne").style.visibility = "visible";
        document.getElementById("buttonTwo").style.visibility = "visible";
        document.getElementById("buttonThree").style.visibility = "visible";
        drawWinner();
    } else if (parameter == 4) {
        if (!hasWon) {
            document.getElementById("result").innerHTML = "Only loosers quit when they are not winning!"
        } else {
            document.getElementById("result").innerHTML = "Thank you for playing!"
        }
        document.getElementById("YES").style.visibility = "hidden";
        document.getElementById("NO").style.visibility = "hidden";
    }
}

//function to show the user if he had clicked the correct button and play again yes or no buttons. 
function checkWinner(x) {
    if (x == winner) {
        document.getElementById("result").innerHTML = "You clicked the lucky button! Play again?"
        document.getElementById("buttonOne").style.visibility = "hidden";
        document.getElementById("buttonTwo").style.visibility = "hidden";
        document.getElementById("buttonThree").style.visibility = "hidden";
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("YES").style.visibility = "visible";
        document.getElementById("NO").style.visibility = "visible";
        hasWon = true;
        playAgain();
    } else {
        document.getElementById("result").innerHTML = "You missed! Play again?"
        document.getElementById("buttonOne").style.visibility = "hidden";
        document.getElementById("buttonTwo").style.visibility = "hidden";
        document.getElementById("buttonThree").style.visibility = "hidden";
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("YES").style.visibility = "visible";
        document.getElementById("NO").style.visibility = "visible";
        hasWon = false;
        playAgain();
    }

}