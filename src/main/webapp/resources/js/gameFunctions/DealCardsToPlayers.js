/**
 * Created by r730819 on 7/8/2016.
 */


function dealCards(){
    var numOfPlayers = settingsObjectStatic.numOfPlayers;
    var i, j;

    console.log("Dealing cards to "+numOfPlayers+" players");

    for(i=0; i<numOfPlayers; i++){
        for(j=0; j<2; j++){
            getPlayerList()[i].hand.push(DeckReference.getCardFromDeckAndRemove());
        }
        console.log("Player: " + getPlayerList()[i].name + "'s hand is now \n" +
            getPlayerList()[i].hand[0].cardValue + ", "+getPlayerList()[i].hand[0].cardSuit+"\n" +
            getPlayerList()[i].hand[1].cardValue + ", "+getPlayerList()[i].hand[1].cardSuit+"\n");

        var homeDiv = $('#home-div');

        if(i==0){
            homeDiv.append('<div class="player'+(i+1)+'-hand">' +
                '<div class="player'+(i+1)+'-title">'+getPlayerList()[i].name+'</div>' +
                '<img onClick = "" class="card-body1 player'+(i+1)+'-card1" src="'+getPlayerList()[i].hand[0].cardImg.src+'">' +
                '<img onClick = "" class="card-body2 player'+(i+1)+'-card2" src="'+getPlayerList()[i].hand[1].cardImg.src+'">' +
                '</div>');
        }else{
            homeDiv.append('<div class="player'+(i+1)+'-hand">' +
                '<div class="player'+(i+1)+'-title">'+getPlayerList()[i].name+'</div>' +
                '<img onClick = "" class="card-body1 player'+(i+1)+'-card1" src="resources/images/deck-of-card.png">' +
                '<img onClick = "" class="card-body2 player'+(i+1)+'-card2" src="resources/images/deck-of-card.png">' +
                '</div>');
        }

       /* homeDiv.append('<div class="">' +
            '<img onClick = "" class="card-body1 player'+i+'" src="'+getPlayerList()[i].hand[0].cardImg.src+'">' +
            '</div>');
        homeDiv.append('<div class="">' +
            '<img onClick = "" class="card-body2 player'+i+'" src="'+getPlayerList()[i].hand[1].cardImg.src+'">' +
            '</div>');*/
    }

}