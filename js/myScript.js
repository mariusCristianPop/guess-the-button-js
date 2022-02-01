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
    for (let i = 0; i < 3; ++i) {
        divElem.appendChild(configButton("Button " + (i + 1), i));
        document.body.appendChild(divElem);
         
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