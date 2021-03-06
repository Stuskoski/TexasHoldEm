/**
 * Created by r730819 on 7/8/2016.
 */


function dealCards(){
    var numOfPlayers = PlayerListObject.length;
    var i, j;

    console.log("Dealing cards to "+numOfPlayers+" players");

    console.log("Current PlayerList: ");
    for(i=0; i<PlayerListObject.length; i++){
        console.log(PlayerListObject[i].name);
    }


    for(i=0; i<numOfPlayers; i++){
        for(j=0; j<2; j++){
            getPlayerList()[i].hand.push(DeckReference.getCardFromDeckAndRemove());
        }
        console.log("Player: " + getPlayerList()[i].name + "'s hand is now" +
            playersHandToString(getPlayerList()[i]));

        var homeDiv = $('#home-div');

        if(i==0){
            homeDiv.append('<div id="'+PlayerListObject[i].name+'-hand" class="player'+(i+1)+'-hand">' +
                '<div>' +
                '<div id="player-'+PlayerListObject[i].name+'-title" class="player-title">'+getPlayerList()[i].name+'</div>' +
                '<div id="player'+PlayerListObject[i].name+'-bank" class="player-title">$'+getPlayerList()[i].money+'</div>' +
                '</div>' +
                '<img id="'+PlayerListObject[i].name+'c1" class="card-body1 player'+(i+1)+'-card1" src="'+getPlayerList()[i].hand[0].cardImg.src+'">' +
                '<img id="'+PlayerListObject[i].name+'c2" class="card-body2 player'+(i+1)+'-card2" src="'+getPlayerList()[i].hand[1].cardImg.src+'">' +
                '</div>');
        }else{
            homeDiv.append('<div id="'+PlayerListObject[i].name+'-hand" class="player'+(i+1)+'-hand">' +
                '<div id="'+PlayerListObject[i].name+'-title-container">' +
                '<div id="player-'+PlayerListObject[i].name+'-title" class="player-title">'+getPlayerList()[i].name+'</div>' +
                '<div id="player'+PlayerListObject[i].name+'-bank" class="player-title">$'+getPlayerList()[i].money+'</div>' +
                '</div>' +
                '<img id="'+PlayerListObject[i].name+'c1" class="card-body1 player'+(i+1)+'-card1" src="resources/images/deck-of-card.png">' +
                '<img id="'+PlayerListObject[i].name+'c2" class="card-body2 player'+(i+1)+'-card2" src="resources/images/deck-of-card.png">' +
                '</div>');
        }


       /* homeDiv.append('<div class="">' +
            '<img onClick = "" class="card-body1 player'+i+'" src="'+getPlayerList()[i].hand[0].cardImg.src+'">' +
            '</div>');
        homeDiv.append('<div class="">' +
            '<img onClick = "" class="card-body2 player'+i+'" src="'+getPlayerList()[i].hand[1].cardImg.src+'">' +
            '</div>');*/
    }

    makePlayerTitlesInTheRightPlace();

}

function makePlayerTitlesInTheRightPlace(){
    var i;

    for(i=0; i<PlayerListObject.length; i++){
        //player-'+PlayerListObject[i].name+'-title
        //.player7-title
        $('#'+PlayerListObject[i].name+'-title-container').addClass('player'+i+'-title');
        //$('player-'+PlayerListObject[i].name+'-title').addClass('player'+i+'-title');
    }
}


function playersHandToString(player){
    var playerHandString = "";
    var i;

    for(i=0; i<player.hand.length; i++){
        playerHandString += "\n" + player.hand[i].cardValue + ", " + player.hand[i].cardSuit;
    }

    return playerHandString;
}