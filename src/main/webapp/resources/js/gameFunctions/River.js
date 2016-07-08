/**
 * Created by r730819 on 7/8/2016.
 */
function riverTheDeck(){
    var homeDiv = $('#home-div');

    console.log("Adding Flop Card");

    var riverCard1 = DeckReference.getCardFromDeckAndRemove();

    TableCardsStaticObject.addCardToTableCards(riverCard1);

    homeDiv.append('<img onClick = "" class="river-card" ' +
        'src="'+riverCard1.cardImg.src+'">');
}