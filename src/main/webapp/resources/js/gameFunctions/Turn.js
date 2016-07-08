/**
 * Created by r730819 on 7/8/2016.
 */
function turnTheDeck(){
    var homeDiv = $('#home-div');

    console.log("Adding Flop Card");

    var turnCard1 = DeckReference.getCardFromDeckAndRemove();

    TableCardsStaticObject.addCardToTableCards(turnCard1);

    homeDiv.append('<img onClick = "" class="turn-card" ' +
        'src="'+turnCard1.cardImg.src+'">');
}