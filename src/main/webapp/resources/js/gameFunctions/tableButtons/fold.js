/**
 * Created by r730819 on 7/8/2016.
 */
function foldPlayer(){
    console.log("Player Folded");

    $('#'+PlayerListObject[currentPlayerTurn].name+'-hand').empty();
    console.log('#'+PlayerListObject[currentPlayerTurn].name+'-hand' + ' was emptied');

    PlayerListObject.splice(currentPlayerTurn, 1);
    //PlayerListObject[currentPlayerTurn].hasFolded = true;

    //Hide the players cards
   // $('.player'+(currentPlayerTurn+1)+'-hand').empty();
   // console.log('.player'+(currentPlayerTurn+1)+'-hand' + ' was emptied');



    //update the current turn
    currentPlayerTurn--;
    if(currentPlayerTurn < 0){
        currentPlayerTurn = 0;
    }

    nextTurn();



    /*homeDiv.append('<div id="'+PlayerListObject[i]+'-hand" class="player'+(i+1)+'-hand">' +
        '<div class="player-'+(i+1)+'-title">'+getPlayerList()[i].name+'</div>' +
        '<img id="'+PlayerListObject[i]+'c1" class="card-body1 player'+(i+1)+'-card1" src="'+getPlayerList()[i].hand[0].cardImg.src+'">' +
        '<img id="'+PlayerListObject[i]+'c2" class="card-body2 player'+(i+1)+'-card2" src="'+getPlayerList()[i].hand[1].cardImg.src+'">' +
        '</div>');
}else{
    homeDiv.append('<div id="'+PlayerListObject[i]+'-hand" class="player'+(i+1)+'-hand">' +
        '<div class="player'+(i+1)+'-title">'+getPlayerList()[i].name+'</div>' +
        '<img id="'+PlayerListObject[i]+'c1" class="card-body1 player'+(i+1)+'-card1" src="resources/images/deck-of-card.png">' +
        '<img id="'+PlayerListObject[i]+'c2" class="card-body2 player'+(i+1)+'-card2" src="resources/images/deck-of-card.png">' +
        '</div>');*/
}

function setHumanFolded(){
    theHumanHasFolded = true;
}