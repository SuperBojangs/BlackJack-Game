

function test(){
	alert ("this works!");
}

//Blackjack project

//generate a random card between 1 and 52
var cards = []; // the card deck (52 cards)
player_hand  =[];   //player's hand
dealer_hand = [];  //dealer's hand
var currentCard = 0;
var this_card;


$(document).ready(function(){
	console.log(generate_deck());
	console.log(shuffle(cards));
	console.log(getCard(currentCard));

	var next_card = drawCard(getCard(cards[currentCard]),"dealer_hand");
	currentCard +=1;

	for(i=0; i<2; i++){
		$("#dealer").append(next_card);
		currentCard +=1;
	}
	
	//
	//create the dealer's hand--push 2 cards to his array
	//drawCard
	//
	
	
	//when the button is clicked
	//create a div var based on currentCard
	//create the div
	$("button").click(function(){
		//when you click the button, pull the next card in the array and
		//add the total points of the hand into the black points box
		var next_card = drawCard(getCard(cards[currentCard]),"player_hand");
		currentCard +=1;
		$("#player").append(next_card);
		var points = countpoints(player_hand)
		$("#points").html(points);
		if (points > 21){
			alert("bust!");
		}

		//add the points\
		//1.  add the card value to the player's hand
		//1.  get the points


	})

})






function generate_deck(){       //generates the deck of cards when js executes in order
  for (var i=0; i<52; i++){
    cards.push(i);
  }
  return cards;
}

function shuffle(cards) {
    /* Given an array of integers (which represent cards in our case), shuffle 
	them randomly to simulate the shuffling of a deck. 
    Then, return that newly shuffled array.
	*/
	for(var each in cards){
        j = Math.floor(Math.random()*(cards.length));
        swap(cards,each,j);
    }
    return cards;  
}

/*
	This function swaps the elements in array a indexed by positions i and j.
*/
function swap(a, i, j) {
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}

function getCard(n){
    /*
    This method accepts an integer value (n) that is used internally in this
    program to identify a unique playing card. It returns a more
    human-readable string representing the card's number and suit.
	The string is formatted: "[rank] [suit]", where rank is an integer 
	from 1 to 13, and suit is the short form of the correct suit: 
	c for clubs, d for diamonds, h for hearts and s for spades.
	For example, the ace of clubs corresponds to : "1 c", while the 
	queen of hearts would be "12 h".

	Regarding the internal integer representation of the cards (n), the
    cards are ordered/numbered as follows:
	0 - 12 (Ace to King of clubs)
	13 - 25 (Ace to King of diamonds)
	26 - 38 (Ace to King of hearts)
	39 - 51 (Ace to King of spades)

	If an invalid integer n is provided (i.e. n < 0 or n > 51), return the 
	string: "error".
	*/
    val = n%13+1;
    if (n >-1 && n<13){
     return String(val)+ " "+"c";  
	}
    if (n >12 && n<26){
        return String(val) + " "+"d";
    }
    if (n >25 && n <39){
        return String(val) + " " +"h";
    }
    if (n >38 && n < 52){
        return String(val) + " " +"s";    
    }
    else {
        return "error";
    }
    
}



//make a variable random between 1 and 3
/*if its a 1, assign it the first class
	if its a 2, assign it the 2nd class
		if its a 3, assign it the 3rd class*/


function drawCard(currentCard, whose_hand){
	//takes currentCard and splits the vals and saves in variables
	var eval = currentCard.split(' ');
	console.log ("eval: "+eval);
	var rank = eval[0];
	var s = eval[1];
	var suit;
	if(s == "c"){
			suit = "clubs";
		}
		else if(s == "d"){
			suit = "diamonds";
		}
		else if(s == "h"){
			suit = "hearts";
		}
		else{
			suit = "spades";
		}
	
	var new_div = "<div class='card "+suit+" rank"+rank+"'></div>";

	whose_hand.push(rank);
	return new_div;


}

function countpoints(hand) {
    /*Counts the points in a given hand.
	The hand will be provided as an array of integers, each corresponding 
	to a certain rank of cards.
	Each element of the array has a rank from 1 to 13. 
	Ace = 1, Number cards correspond to their numbers, J = 11 and so on.
	
    The point value of each card is calculated using the following standard
    Blackjack scoring formula:
	Ace - is either 1 or 11, depending on which ever value results in a
        better total for the hand (i.e., highest possible point value below 21),
	2 to 10 - their corresponding numerical values,
	Jack, Queen, or King - 10 points.

	*/

    var total = 0;
    for (var i = 0; i < hand.length; i++){
        console.log(hand[i]);
        var each = parseInt(hand[i]);
        console.log("each: "+each);

        if (each>1 && each<11){
            total +=each;
        }
        else if (each >10){
            total +=10;
            
        }
        else if (each ==1){  
            total +=11;
            if (total >21){
            total -=10;
        	}
        }	           
        
        
    
   
	}
	console.log("total points: "+total);
    return total;
        
}










