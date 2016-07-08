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

