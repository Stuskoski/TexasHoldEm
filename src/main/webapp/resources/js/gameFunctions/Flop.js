/**
 * Created by r730819 on 7/8/2016.
 */

function flopTheDeck(){
    var homeDiv = $('#home-div');

    console.log("Adding Flop Cards");

    var flopCard1 = DeckReference.getCardFromDeckAndRemove();
    var flopCard2 = DeckReference.getCardFromDeckAndRemove();
    var flopCard3 = DeckReference.getCardFromDeckAndRemove();

    TableCardsStaticObject.addCardToTableCards(flopCard1);
    TableCardsStaticObject.addCardToTableCards(flopCard2);
    TableCardsStaticObject.addCardToTableCards(flopCard3);


    homeDiv.append('<img onClick = "" class="flop-card1" ' +
        'src="'+flopCard1.cardImg.src+'">');
    homeDiv.append('<img onClick = "" class="flop-card2" ' +
        'src="'+flopCard2.cardImg.src+'">');
    homeDiv.append('<img onClick = "" class="flop-card3" ' +
        'src="'+flopCard3.cardImg.src+'">');
}
