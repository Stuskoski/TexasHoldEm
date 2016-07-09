/**
 * Created by r730819 on 7/8/2016.
 */

function whoWins(){
    var list = PlayerListObject;
    var i;
    var tableCards = TableCardsStaticObject.list;
    var nonFoldedPlayers = 0;
    var winner;

    DeckAction = 0;
    currentPlayerTurn = 0;


    //check for only one player left first
    for(i=0; i<PlayerListObject.length; i++){
        PlayerListObject[i].isItMyTurn = false;//set everyone to not having a turn
        if(!PlayerListObject[i].hasFolded){
            nonFoldedPlayers++;
            winner = i;
        }
    }

    if(nonFoldedPlayers <= 1){
        showAndThenHideInfoWindow(PlayerListObject[winner].name + " wins the round!");
        PlayerListObject[winner].money += ThePot;
        ThePot = 0;
        saveUserMoney();
    }

    for(i=0; i<list.length; i++){
        if(!list[i].hasFolded){
            var hand = list[i].hand;

            //check straight flush
            //check four of a kind
            //check full house
            //check flush
            //check straight
            //check 3 of a kind
            //check 2 pair
            //check 1 pair
            //check high card
            console.log(TableCardsStaticObject);
        }
    }

    restartGame();
}

function checkStraightFlush(hand){

}
function check4OfAKind(hand){

}
function checkFullHouse(hand){

}
function checkFlush(hand){

}
function checkStraight(hand){

}
function check3OfAKind(hand){

}
function check2Pair(hand){

}
function check1Pair(hand){

}
function checkHighCard(hand){

}