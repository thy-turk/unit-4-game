var randomNumber;
var wins = 0;
var losses= 0;
var totalScore



var randomNumber = function randomNumberGen() {  
    return Math.floor(Math.random() * 102) + 19; 
}

var gem1Val = function randomNumberGem1() {  
    return Math.floor(Math.random() * 12) + 1; 
}

var gem2Val = function randomNumberGem2() {  
    return Math.floor(Math.random() * 12) + 1; 
}

var gem3Val = function randomNumberGem3() {  
    return Math.floor(Math.random() * 12) + 1; 
}

var gem4Val = function randomNumberGem4() {  
    return Math.floor(Math.random() * 12) + 1; 
}

function gameStart() {
    randomNumberGen();
    randomNumberGem1();
    randomNumberGem2();
    randomNumberGem3();
    randomNumberGem4();
}





$('#random-number').text(randomNumber);

$('#wins').text(wins);

$('#losses').text(losses);

$('#total-score').text(totalScore);

if (totalScore === randomNumber) {
    wins++;
    gameStart();
} else if (totalScore > randomNumber) {
    losses++;
    gameStart();
} else {

}

$('#gem1').on("click", function() {
   return totalScore = totalScore + gem1Val;
});




