/**
 * Created by r730819 on 7/7/2016.
 */

var TableCardsStaticObject;

function TableCardsObject(){
    this.list = [];
}

TableCardsObject.prototype.addCardToTableCards = function(card){
    this.list.push(card);
};

TableCardsObject.prototype.clearTableCards = function(){
    this.list.length = 0;
};

TableCardsObject.prototype.tableCardsToString = function(){
    var string = "\n";
    var i;

    for(i=0; i<this.list.length; i++){
        string += this.list[i].cardValue + ", " + this.list[i].cardSuit + "\n";
    }

    return string;
};

