var gem1Val;
var gem2Val;
var gem3Val;
var gem4Val;
var randomNumber;
var wins = 0;
var losses= 0;
var totalScore = 0;



// var randomNumber = function randomNumberGen() {  
//     return Math.floor(Math.random() * 102) + 19; 
// }

// var gem1Val = function randomNumberGem1() {  
//     return Math.floor(Math.random() * 12) + 1; 
// }

// var randomNumber = Math.floor(Math.random() * 102) + 19;

// var gem1Val = Math.floor(Math.random() * 12) + 1;

// var gem2Val = Math.floor(Math.random() * 12) + 1;

// var gem3Val = Math.floor(Math.random() * 12) + 1;

// var gem4Val = Math.floor(Math.random() * 12) + 1;


function gameStart() {
    randomNumber = Math.floor(Math.random() * 102) + 19;

    $('#random-number').text(randomNumber);

    gem1Val = Math.floor(Math.random() * 12) + 1;

    gem2Val = Math.floor(Math.random() * 12) + 1;

    gem3Val = Math.floor(Math.random() * 12) + 1;

    gem4Val = Math.floor(Math.random() * 12) + 1;

    totalScore = 0;

    $('#total-score').text(totalScore);
}


gameStart();


// $('#random-number').text(randomNumber);

// $('#wins').text(wins);

// $('#losses').text(losses);

// $('#total-score').text(totalScore);



// function winOrLose() {
//     if (totalScore.val === randomNumber.val) {
//         winner();
//     } else if (totalScore.val > randomNumber.val) {
//         loser();
//     } else {

//     }
// }

// function winner() {
//     wins++;
//     $('#wins').text(wins);
//     gameStart();
// }

// function loser() {
//     losses++;
//     $('#losses').text(losses);
//     gameStart();
// }

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

$('#gem3').on("click", function() {
    totalScore = totalScore + gem3Val;
    $('#total-score').text(totalScore);
    winOrLose();
 });
 
 $('#gem4').on("click", function() {
     totalScore = totalScore + gem4Val;
     $('#total-score').text(totalScore);
     winOrLose();
 });

 function winOrLose() {
 if (totalScore === randomNumber) {
    wins++;
    $('#wins').text(wins);
    gameStart();
} else if (totalScore > randomNumber) {
    losses++;
    $('#losses').text(losses);
    gameStart();
} else {

}

}