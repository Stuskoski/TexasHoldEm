/**
 * Created by r730819 on 7/9/2016.
 */


var PlayerScores = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000];

/**
 * Give all the players their money again after creating their object again
 */
function reinstantiateUserMoney(){
    var i;

    for(i=0; i<PlayerListObject.length; i++){
        PlayerListObject[i].money = PlayerScores[i];
    }
}

/**
 * Check the user if they have sufficient money or not
 */
function checkUserForNoMoney(){
    var i;

    for(i=0; i<PlayerListObject.length; i++){
        if(PlayerListObject[i].money <= 0){
            PlayerListObject.splice(i, "1");
        }
    }
}

/**
 * Every new turn take the blind from everyone and add
 * to the pot.  If they don't have the amount, take what's left.
 */
function takeTheBlindFromPlayersAndAddToPot(){
    var i;

    for(i=0; i<PlayerListObject.length; i++){
        if(PlayerListObject[i].money >= 25){
            PlayerListObject[i].money -= 25;
            ThePot += 25;
        }else{
            ThePot += PlayerListObject[i].money;
            PlayerListObject[i].money = 0;
        }
    }

    updateAllMoneysOnTable();

}

function updateAllMoneysOnTable(){
    var i;

    var pot = $('.current-pot');
    pot.empty();
    pot.append('Current Pot:$<span>'+ ThePot +'</span>');

    for(i=0; i<PlayerListObject.length; i++){
        var playerBank = $('#player'+PlayerListObject[i].name+'-bank')
        playerBank.empty();
        playerBank.append('$'+PlayerListObject[i].money);
    }
}

