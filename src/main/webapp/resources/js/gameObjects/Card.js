/**
 * Created by r730819 on 7/7/2016.
 */

function CardObject(value, suit){
    this.cardValue = value;
    this.cardSuit = suit;
    this.cardImg = new Image;
    this.cardImg.src = "resources/images/cards/"+value+suit+".png";
}

CardObject.prototype.getCard = function(){
    return this.card;
};

CardObject.prototype.setCard = function(card){
    this.card = card;
};


CardObject.prototype.getInfo = function(){
    alert("Card Value: " + this.cardValue + "\n" +
          "Card Suit: " + this.cardSuit);
};




