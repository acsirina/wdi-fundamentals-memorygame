


var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne;

cardOne = cards[0];

cardsInPlay.push(cardOne); 

var cardTwo;

cardTwo = cards[1];

cardsInPlay.push(cardTwo); 

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}







// var cardsInPlay = [];

// var cardOne = cards[0];

// cardsInPlay.push("queen");

// var cardTwo = cards[2];

// cardsInPlay.push("king");
// console.log();
// if (cardsInPlay.length === 2) {

// } else if (cardsInPlay[0] === cardsInPlay[2]) {
//   alert("You found a match!");

// } else {
// 	alert("Sorry, try again.");
// }

