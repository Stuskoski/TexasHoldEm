/**
 * Created by r730819 on 7/7/2016.
 */

var DeckReference;
var DeckAction = 0;

function DeckObject(){
    this.deck = [];
    this.deckImg = new Image;
    this.deckImg.src = "resources/images/deck-of-card.png";
}

function deckReferenceListDeck(){
    DeckReference.giveDeckOrder();
}

function nextDeckAction(){
    var deckMsg = $('.next-step');

    console.log("Next Deck Action: " + DeckAction);
    if(DeckAction == 0){
        DeckReference.removeCardFromDeck();
        dealCards();
        deckMsg.empty();
        deckMsg.append("Flop");
        //showAndThenHideInfoWindow("Dealing Cards");
        DeckAction++;
    }
    else if(DeckAction == 1){
       // showAndThenHideInfoWindow("Here comes the flop");
        DeckReference.removeCardFromDeck();
        flopTheDeck();
        deckMsg.empty();
        deckMsg.append("Turn");
        DeckAction++;
    }
    else if(DeckAction == 2){
       // showAndThenHideInfoWindow("The Turn coming up");
        DeckReference.removeCardFromDeck();
        turnTheDeck();
        deckMsg.empty();
        deckMsg.append("River");
        DeckAction++;
    }
    else if(DeckAction == 3){
        //showAndThenHideInfoWindow("The River coming up");
        DeckReference.removeCardFromDeck();
        riverTheDeck();
        deckMsg.empty();
        deckMsg.append("Finish");
        DeckAction++;
    }
    else if(DeckAction == 4){
        whoWins();
        deckMsg.empty();
        deckMsg.append("Restart");
        DeckAction=0;
    }
}



DeckObject.prototype.addCardToDeck = function(card){
    this.deck.push(card);
};

//Remove card from front
DeckObject.prototype.removeCardFromDeck = function(){
    console.log("A card was removed");
    this.deck.shift();
};

//Deal card and remove from deck
DeckObject.prototype.getCardFromDeckAndRemove = function(){
    var card = this.deck.shift();
    console.log("A card was dealt");

    return card;
};

DeckObject.prototype.getDeck = function(){
    return this.deck;
};

DeckObject.prototype.setDeck = function(deck){
    this.deck = deck;
};

DeckObject.prototype.giveDeckOrder = function(){
    var i;
    var deckString = "";
    console.log("Deck Order Called");
    console.log("Deck Length: " + this.deck.length);

    for(i=0; i < this.deck.length; i++){
        var card = this.deck[i];

        deckString += (card.cardValue + "\n" + card.cardSuit + "\n\n");
    }

    alert(deckString);
};


