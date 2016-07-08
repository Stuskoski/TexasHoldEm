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
    console.log("Next Deck Action: " + DeckAction);
    if(DeckAction == 0){
        showAndThenHideInfoWindow("Dealing Cards");
        DeckAction++;
    }
    else if(DeckAction == 1){
        showAndThenHideInfoWindow("Here comes the flop");
        DeckAction++;
    }
    else if(DeckAction == 2){
        showAndThenHideInfoWindow("The river flows");
        DeckAction++;
    }
    else if(DeckAction == 3){
        showAndThenHideInfoWindow("Fifth Street coming up");
        DeckAction++;
    }
    else if(DeckAction == 4){
        showAndThenHideInfoWindow("Dealing Cards");
        DeckAction=0;
    }
}

DeckObject.prototype.addCardToDeck = function(card){
    this.deck.push(card);
};

//Remove card from front
DeckObject.prototype.removeCardFromDeck = function(){
    this.deck.shift();
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


