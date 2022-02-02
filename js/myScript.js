document.addEventListener("DOMContentLoaded", function() {
    createButtons();
    drawWinner();
});

// create the 3 buttons and append them to body
function createButtons() {
    var myDiv = document.getElementById("buttonsDiv");
    for (let i = 0; i < 3; ++i) {
        var button = document.createElement('button');
        button.innerHTML = "Button " + (i + 1);
        button.id = i;
        button.type = "submit"
        button.setAttribute("onclick", `checkWinner(${i})`);
        myDiv.appendChild(button);
    }
}
// Decide wich ID won the game
var winner = -1;
function drawWinner() {
    winner = Math.random(0, 2).toFixed();
    console.log("The winner is " + winner); // left here on purpose for debugging reasons
}

// Check if the user clicked on the winning button
function checkWinner(x) {
    if (x == winner) {
       showResult(1);
    } else {
        showResult(0);
    }
}

function showResult(parameter) {
    var divElem = document.createElement('p');
    divElem.setAttribute('style', 'text-align:center;');
    divElem.setAttribute('name', 'resultDiv');
    if (parameter == 1) {
        var textNode = document.createTextNode("You clicked the lucky button!");
        hideButtons();
    } else {
        var textNode = document.createTextNode("You missed!");
        hideButtons(); 
    }
    divElem.appendChild(textNode);
    document.body.appendChild(divElem);
         
}

function hideButtons() {
    for (let i = 0; i < 3; ++i) {
        document.getElementById(i).style.visibility = "hidden"; 
    }
}