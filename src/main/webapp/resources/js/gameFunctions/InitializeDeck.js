/**
 * Created by r730819 on 7/7/2016.
 */

var tempArrayOfCards = [];
var totalCardsAdded = 0;

function InitDeck(numOfDecks){
    var i;

    //Generate all the cards and add in random order
    for(i=0; i < numOfDecks; i++){
        generateClubs();
        generateSpades();
        generateHearts();
        generateDiamonds();
    }

    randomizeDeck();

}

function generateClubs(){
    var i;

    for(i = 2; i <= 14; i++){
        tempArrayOfCards.push(new CardObject(i, "clubs"));
        totalCardsAdded++;
    }
}

function generateSpades(){
    var i;

    for(i = 2; i <= 14; i++){
        tempArrayOfCards.push(new CardObject(i, "spades"));
        totalCardsAdded++;
    }
}

function generateHearts() {
    var i;

    for(i = 2; i <= 14; i++){
        tempArrayOfCards.push(new CardObject(i, "hearts"));
        totalCardsAdded++;
    }
}

function generateDiamonds() {
    var i;

    for(i = 2; i <= 14; i++){
        tempArrayOfCards.push(new CardObject(i, "diamonds"));
        totalCardsAdded++;
    }
}

function randomizeDeck(){
    var deck = new DeckObject();
    var limit = tempArrayOfCards.length;
    var tempLocalArray;
    var i;

    console.log("limit: " + limit);
    console.log("total: " + totalCardsAdded);

    //console.log("Cards array: " + tempArrayOfCards.toString());
    tempLocalArray = shuffleArray(tempArrayOfCards);

    for(i=0; i < limit; i++) {
        deck.addCardToDeck(tempLocalArray[i]);
    }

    //Set static reference in Deck.js
    DeckReference = deck;
    console.log("Deck reference set")
}
