document.addEventListener("DOMContentLoaded", function() {
    createButton();
    drawWinner();
});

// creating the button template;
function configButton(text, id) {
    var btn = document.createElement("button");
    btn.innerHTML = text;
    btn.id = id;
    btn.type = "Submit";
    btn.onclick = function () {
        checkWinner(id);
      };
    return btn;
}

// create the 3 buttons and append them to body
function createButton() {
    //creating the div 
    var divElem = document.createElement('div');
    divElem.setAttribute('style', 'text-align:center;');
    divElem.setAttribute('name', 'buttonsDiv');
    for (let i = 1; i < 4; ++i) {
        divElem.appendChild(configButton("Button " + i, i));
        document.body.appendChild(divElem);
         
    }
}
// Decide wich ID won the game
var winner = -1;
function drawWinner() {
    winner = Math.random(1, 3).toFixed();
    console.log("The winner is " + winner); // left here on purpose for debugging reasons
}

// Check if the user clicked on the winning button
function checkWinner(x) {
    if (x == winner) {
        console.log("You rock! Congratulations!");
    } else {
        console.log("You missed!");
    }
}