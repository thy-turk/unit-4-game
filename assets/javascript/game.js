var gem1Val;
var gem2Val;
var gem3Val;
var gem4Val;
var randomNumber;
var wins = 0;
var losses= 0;
var totalScore = 0;



var randomNumber = function randomNumberGen() {  
    return Math.floor(Math.random() * 102) + 19; 
}

// var gem1Val = function randomNumberGem1() {  
//     return Math.floor(Math.random() * 12) + 1; 
// }

var gem1Val = Math.floor(Math.random() * 12) + 1;

var gem2Val = Math.floor(Math.random() * 12) + 1;

var gem3Val = Math.floor(Math.random() * 12) + 1;

var gem4Val = Math.floor(Math.random() * 12) + 1;


function gameStart() {
    randomNumberGen();
    var gem1Val = Math.floor(Math.random() * 12) + 1;

    var gem2Val = Math.floor(Math.random() * 12) + 1;

    var gem3Val = Math.floor(Math.random() * 12) + 1;

    var gem4Val = Math.floor(Math.random() * 12) + 1;

    totalScore = 0;
}





$('#random-number').text(randomNumber);

$('#wins').text(wins);

$('#losses').text(losses);

$('#total-score').text(totalScore);

function winOrLose() {
    if (totalScore == randomNumber) {
        winner();
    } else if (totalScore > randomNumber) {
        loser();
    } else {

    }
}

function winner() {
    wins++;
    $('#wins').text(wins);
    gameStart();
}

function loser() {
    losses++;
    $('#losses').text(losses);
    gameStart();
}

$('#gem1').on("click", function() {
   totalScore = totalScore + gem1Val;
   $('#total-score').text(totalScore);
   winOrLose();
});

$('#gem2').on("click", function() {
    totalScore = totalScore + gem2Val;
    $('#total-score').text(totalScore);
    winOrLose();
});

